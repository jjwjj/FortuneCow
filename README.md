FortuneCow
==========

Bringing SMS and some Linux utilities together for a humorous result.
A working example can be viewed by sending a text message to +1-929-226-6389

I am unit testing pieces for a larger project, and decided to have some fun with it.  Twilio is capable of sending and receiving SMS messages. This project runs on an Ubuntu Amazon EC2 instance and is powered by node.js

Ubuntu has some great commandline utilities that can generate text.  I am using the standard Linux fortune command, and originally tried to pipe it through cowsay. The resultant text from cowsay is not SMS friendly, so I am currently rebuilding it from within the node.js code.

This package uses the following node.js packages:
* twilio = for sms processing and sending
* express = for handling incoming post requests
* body-parser = for extracting elements out of the post request

Assumptions are:
* A valid twilio account
* Ubuntu running on EC2 (I couldn't get yum to install "fortune")

Constraints:
* cowsay files can be used as a start, but they need to be tweaked for sms
* this is an ubuntu solution

