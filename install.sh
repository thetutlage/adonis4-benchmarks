echo "installing 3.2 dependencies" ;
cd 3.2.0 ;
npm install
cp -a .env.example .env
cd ..; 

echo "installing 4.0 dependencies" ;
cd 4.0.0 ;
npm install
cp -a .env.example .env
cd ..; 

echo "Installed dependencies";