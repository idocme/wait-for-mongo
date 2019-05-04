# Wait for mongo to start

Just pass the full uri of the mongodb connection, set the time or use the default.

# Usage

wait-for-mongo --uri mongodb://usr:pwd@localhost:27017/nameOfDB --t 2

--t / --time is the interval time to check the connection. (in seconds)</br>
--uri is the uri to try to connecto to.</br>

The application will disconnect from mongodb and exit when done.