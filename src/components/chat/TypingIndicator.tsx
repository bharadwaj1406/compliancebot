import React from 'react';
import { motion } from 'framer-motion';

interface TypingIndicatorProps {
  isVisible: boolean;
}

export const TypingIndicator: React.FC<TypingIndicatorProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex gap-4 p-6 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg"
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary flex-shrink-0 p-2">
        <img 
          src="/logo.svg" 
          alt="Altius AI" 
          className="w-full h-full object-contain opacity-60"
          style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(96%) saturate(3071%) hue-rotate(229deg) brightness(93%) contrast(99%)' }}
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm font-medium text-foreground">Altius AI</span>
          <span className="text-xs text-muted-foreground">thinking...</span>
        </div>
        <div className="flex gap-1">
          <motion.div
            className="w-2 h-2 bg-primary rounded-full"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
          />
          <motion.div
            className="w-2 h-2 bg-primary rounded-full"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
          />
          <motion.div
            className="w-2 h-2 bg-primary rounded-full"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }}
          />
        </div>
      </div>
    </motion.div>
  );
};
