import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Copy, ThumbsUp, ThumbsDown, RotateCcw } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: string;
}

interface ChatMessageProps {
  message: Message;
  index: number;
  onCopy: (text: string) => void;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, index, onCopy }) => {
  return (
    <motion.div
      key={message.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      {/* Message Component */}
      <div className={`flex gap-4 ${message.isUser ? "justify-end" : "justify-start"}`}>
        {!message.isUser && (
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white flex-shrink-0 p-2">
            <img 
              src="/logo.png" 
              alt="Altius AI" 
              className="w-full h-full object-contain filter brightness-0 invert"
            />
          </div>
        )}

        <div className={`max-w-[80%] ${message.isUser ? "order-first" : ""}`}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className={`p-4 rounded-2xl shadow-sm border transition-all duration-200 ${
              message.isUser
                ? "bg-primary text-primary-foreground border-primary/20 rounded-br-md"
                : "bg-card text-card-foreground border-border/50 rounded-bl-md hover:shadow-md"
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                {!message.isUser && (
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium">Altius AI</span>
                    <span className="text-xs opacity-70">{message.timestamp}</span>
                  </div>
                )}
                <p
                  className={`text-sm leading-relaxed ${
                    message.isUser ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {message.content}
                </p>
                {message.isUser && (
                  <div className="text-xs opacity-70 mt-2 text-right">{message.timestamp}</div>
                )}
              </div>
            </div>

            {!message.isUser && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-2 mt-3 pt-3 border-t border-border/30"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onCopy(message.content)}
                  className="h-7 px-2 text-xs hover:bg-accent/10"
                >
                  <Copy className="w-3 h-3 mr-1" />
                  Copy
                </Button>
                <Button variant="ghost" size="sm" className="h-7 px-2 text-xs hover:bg-accent/10">
                  <ThumbsUp className="w-3 h-3 mr-1" />
                  Good
                </Button>
                <Button variant="ghost" size="sm" className="h-7 px-2 text-xs hover:bg-accent/10">
                  <ThumbsDown className="w-3 h-3 mr-1" />
                  Bad
                </Button>
                <Button variant="ghost" size="sm" className="h-7 px-2 text-xs hover:bg-accent/10">
                  <RotateCcw className="w-3 h-3 mr-1" />
                  Retry
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>

        {message.isUser && (
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent flex-shrink-0">
            <span className="text-sm font-medium">U</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};
