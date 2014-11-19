FortuneCow
==========

Bringing SMS and some Linux utilities together for a humorous result.

I am unit testing pieces for a larger project, and decided to have some fun with it.  Twilio is capable of sending and receiving SMS messages. This project runs on an Ubuntu Amazon EC2 instance and is powered by node.js

Ubuntu has some great commandline utilities that can generate text.  I am using the standard Linux fortune command, and originally tried to pipe it through cowsay. The resultant text from cowsay is not SMS friendly, so I am currently rebuilding it from within the node.js code.

This package uses the following node.js packages:
twilio = for sms processing and sending
express = for handling incoming post requests
body-parser = for extracting elements out of the post request

