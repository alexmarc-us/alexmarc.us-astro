---
title: "ChatDev"
date: "11-01-2008"
tags: []
---
I coded ChatDev for my second semester of Computer Science Research Seminar at Connecticut College.  During this research period, I took an in-depth at how chat protocols, specifically XMPP, facilitate communication between users by utilizing socket connections, a centralized multithread server, and peer-to-peer messaging.

ChatDev is a chat protocol and command line client for sending text communications, written in Python. The ChatDev code is available via GitHub at https://github.com/alexmarc-us/ChatDev.

The multi-threaded server receives connections from clients, and stores their information in a database containing the users’ profile.  Then it regularly checks the users' presence, and updates online users with a list of online clients.

The multi-threaded client sends login data to the server, indicating its online presence.  It then waits to receive data from other clients, or send data to other clients, via a P2P interface.  The client software utilizes a command line-style UI.