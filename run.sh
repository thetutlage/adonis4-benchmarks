echo adonis-3.2 >> results.txt ;
cd 3.2.0 ;
node server.js & sleep 5 ;
cd ..; 
ab -k -n 50000 -c 100 -t 20 http://127.0.0.1:4000/ | grep "Requests per second:" >> results.txt ;
pkill -f server.js ;
sleep 10 

echo adonis-4.0 >> results.txt ;
cd 4.0.0 ;
node server.js & sleep 5 ;
cd ..; 
ab -k -n 50000 -c 100 -t 20 http://127.0.0.1:3333/ | grep "Requests per second:" >> results.txt ;
pkill -f server.js ;