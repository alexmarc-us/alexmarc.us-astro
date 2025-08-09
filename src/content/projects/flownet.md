---
title: "Flownet"
date: "12-01-2007"
description: "Created a redundant backup system for Unix servers using SCP and rsync."
categories: ["code", "automation"]
tags: ["Unix", "backup", "shell script", "SCP", "rsync", "network", "automation"]
---
Flownet is a Unix-based redundant backup system, which I developed during a Computer Science Research Seminars at [Connecticut College](http://www.conncoll.edu/).  It was an experiment in Unix operating systems, Bash commands, backup application development, network design, and automation.

![Flownet presentation screenshot](./assets/flownet.png)

Flownet consists of two shell scripts, one for configuration and the other containing the main functionality.  Once the server and folder locations are set via the configuration script, Flownet will automatically connect to the designated servers and perform the designated action, either backing up or restoring the connected server.

The result, when correctly installed on multiple systems, is a network of self-sufficient servers capable of backing up and restoring each other.  The implementation takes advantage of key Unix commands such as SCP and rsync.

The final code for Flownet, as well as the Powerpoint presentation I delivered to the Connecticut College Computer Science department, are available via GitHub here: https://github.com/alexmarc-us/Flownet/