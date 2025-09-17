"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bell, CheckCircle, Info, AlertTriangle, X } from "lucide-react"

interface Notification {
  id: string
  type: "info" | "success" | "warning" | "error"
  title: string
  message: string
  timestamp: Date
  read: boolean
}

export function NotificationCenter() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      type: "info",
      title: "Welcome to GSGROUPS",
      message: "Explore our AI-powered solutions and transform your business today.",
      timestamp: new Date(),
      read: false,
    },
    {
      id: "2",
      type: "success",
      title: "AI Consultation Available",
      message: "Book your free AI consultation with our experts.",
      timestamp: new Date(Date.now() - 3600000),
      read: false,
    },
    {
      id: "3",
      type: "warning",
      title: "Limited Time Offer",
      message: "50% off on AI development services this month.",
      timestamp: new Date(Date.now() - 7200000),
      read: true,
    },
  ])

  const markAsRead = (id: string) => {
    setNotifications((prev) => prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif)))
  }

  const removeNotification = (id: string) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id))
  }

  const getIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />
      case "error":
        return <AlertTriangle className="h-5 w-5 text-red-500" />
      default:
        return <Info className="h-5 w-5 text-blue-500" />
    }
  }

  return (
    <div className="space-y-4 max-h-96 overflow-y-auto">
      {notifications.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <Bell className="h-12 w-12 mx-auto mb-4 text-gray-300" />
          <p>No notifications</p>
        </div>
      ) : (
        notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 border rounded-lg ${notification.read ? "bg-gray-50" : "bg-white border-blue-200"}`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                {getIcon(notification.type)}
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-medium text-gray-900">{notification.title}</h4>
                    {!notification.read && (
                      <Badge variant="secondary" className="text-xs">
                        New
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                  <p className="text-xs text-gray-400 mt-2">{notification.timestamp.toLocaleString()}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {!notification.read && (
                  <Button variant="ghost" size="sm" onClick={() => markAsRead(notification.id)} className="text-xs">
                    Mark as read
                  </Button>
                )}
                <Button variant="ghost" size="sm" onClick={() => removeNotification(notification.id)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  )
}
