"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ChatSidebar, ChatHeader, ChatMessage, ChatInput, TypingIndicator } from "@/components/chat"

interface Message {
  id: string
  content: string
  isUser: boolean
  timestamp: string
}

interface Chat {
  id: string
  title: string
  lastMessage: string
  timestamp: string
  isActive?: boolean
}

export function AltiusChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hello! Welcome to Altius Hub. I'm your AI assistant ready to help you with anything you need. How can I assist you today?",
      isUser: false,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ])
  const [isTyping, setIsTyping] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const [chats] = useState<Chat[]>([
    {
      id: "1",
      title: "Getting Started with AI",
      lastMessage: "Hello! I'm your AI assistant...",
      timestamp: "2 min ago",
      isActive: true,
    },
    {
      id: "2",
      title: "Project Planning Discussion",
      lastMessage: "Let's break down your project into manageable tasks...",
      timestamp: "1 hour ago",
    },
    {
      id: "3",
      title: "Code Review Help",
      lastMessage: "I can help you review your React components...",
      timestamp: "Yesterday",
    },
    {
      id: "4",
      title: "Design System Questions",
      lastMessage: "For a consistent design system, consider...",
      timestamp: "2 days ago",
    },
    {
      id: "5",
      title: "API Integration Guide",
      lastMessage: "Here's how to integrate with external APIs...",
      timestamp: "1 week ago",
    },
  ])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Auto-resize textarea back to single line
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
    }

    // Simulate AI response
    setTimeout(
      () => {
        const responses = [
          "I understand your question. Let me provide you with a comprehensive answer that addresses your specific needs.",
          "That's an interesting point! Here's what I think about that topic and how it might apply to your situation.",
          "Great question! I can help you with that. Let me break this down into manageable steps for you.",
          "I see what you're looking for. Based on your request, here are some suggestions that might be helpful.",
          "Thanks for sharing that with me. I have some insights that could be valuable for your use case.",
        ]

        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: responses[Math.floor(Math.random() * responses.length)],
          isUser: false,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        }
        setMessages((prev) => [...prev, aiMessage])
        setIsTyping(false)
      },
      Math.random() * 1000 + 1000,
    )
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage(inputValue)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value)

    // Auto-resize textarea
    const textarea = e.target
    textarea.style.height = "auto"
    textarea.style.height = Math.min(textarea.scrollHeight, 120) + "px"
  }

  const handleNewChat = () => {
    setMessages([
      {
        id: "1",
        content:
          "Hello! Welcome to Altius Hub. I'm your AI assistant ready to help you with anything you need. How can I assist you today?",
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ])
    setSidebarOpen(false)
  }

  const handleSelectChat = (chatId: string) => {
    console.log("[v0] Selected chat:", chatId)
    setSidebarOpen(false)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const handleSendInput = () => {
    handleSendMessage(inputValue)
  }

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Sidebar */}
      <ChatSidebar
        chats={chats}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onNewChat={handleNewChat}
        onSelectChat={handleSelectChat}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Chat Area */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* Header */}
        <ChatHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="flex-1 overflow-hidden flex flex-col relative">
          {/* Subtle gradient overlay for immersive feel */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-white pointer-events-none" />

          <div className="flex-1 overflow-y-auto px-6 py-8 relative z-10">
            <motion.div
              className="max-w-4xl mx-auto space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {messages.map((message, index) => (
                <ChatMessage
                  key={message.id}
                  message={message}
                  index={index}
                  onCopy={copyToClipboard}
                />
              ))}

              <TypingIndicator isVisible={isTyping} />

              <div ref={messagesEndRef} />
            </motion.div>
          </div>

          {/* Chat Input */}
          <ChatInput
            inputValue={inputValue}
            isTyping={isTyping}
            textareaRef={textareaRef}
            onInputChange={handleInputChange}
            onKeyPress={handleKeyPress}
            onSend={handleSendInput}
          />
        </div>
      </div>
    </div>
  )
}
