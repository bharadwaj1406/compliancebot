import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

interface ChatHeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex items-center justify-between p-4 border-b border-border bg-secondary backdrop-blur-sm"
    >
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="hover:bg-white/10 text-white"
        >
          <Menu className="w-5 h-5" />
        </Button>
        <div className="flex items-center gap-3">
          <div className="h-8 flex items-center justify-center">
            <img 
              src="/logo.svg" 
              alt="Altius Logo" 
              className="h-8 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </motion.header>
  );
};
