git clone https://github.com/prathik-bot/sensormapapp.git
cd sensormapapp

npm install

npm start


Usage
The app fetches sensor data from your backend API (http://192.168.1.36:5001/api/mock-sensors) -> This is currently mocked

Modify the API endpoint in Index.tsx or your main component if needed.

Sensor markers show location and PM2.5 value on the map popup.

Project Structure
/public/images/ - Marker icon images used by Leaflet

/components/MapComponent.web.tsx - Web version of the map using Leaflet and React-Leaflet

/app/Index.tsx - Main app entry fetching sensors and rendering the map

/src/webStubs/ - React Native Maps web stubs 


Dependencies
React 18+

Leaflet 1.9.4

React-Leaflet 4.x

TypeScript