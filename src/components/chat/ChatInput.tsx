import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Paperclip, Mic, Send } from 'lucide-react';

interface ChatInputProps {
  inputValue: string;
  isTyping: boolean;
  textareaRef: React.RefObject<HTMLTextAreaElement | null>;
  onInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
  onSend: () => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({ 
  inputValue, 
  isTyping, 
  textareaRef, 
  onInputChange, 
  onKeyPress, 
  onSend 
}) => {
  return (
    <div className="relative z-10 bg-gradient-to-t from-white via-white/95 to-transparent pt-4">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="max-w-4xl mx-auto px-6 pb-6"
      >
        <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl shadow-lg overflow-hidden">
          <div className="flex items-end gap-3 p-4">
            <Button variant="ghost" size="sm" className="flex-shrink-0 h-10 w-10 p-0 hover:bg-accent/10">
              <Paperclip className="w-4 h-4" />
            </Button>

            <div className="flex-1 relative">
              <Textarea
                ref={textareaRef}
                value={inputValue}
                onChange={onInputChange}
                onKeyDown={onKeyPress}
                placeholder="Message Altius AI..."
                disabled={isTyping}
                className="min-h-[40px] max-h-[120px] resize-none border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-sm leading-relaxed"
                style={{ height: "40px" }}
              />
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <Button variant="ghost" size="sm" className="h-10 w-10 p-0 hover:bg-accent/10">
                <Mic className="w-4 h-4" />
              </Button>

              <Button
                onClick={onSend}
                disabled={!inputValue.trim() || isTyping}
                size="sm"
                className="h-10 w-10 p-0 bg-primary hover:bg-accent text-primary-foreground disabled:bg-muted disabled:text-muted-foreground"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <p className="text-xs text-muted-foreground text-center mt-3">
          Altius AI can make mistakes. Consider checking important information.
        </p>
      </motion.div>
    </div>
  );
};
