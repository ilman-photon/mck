import { useLoadScript, GoogleMap } from '@react-google-maps/api';
import type { NextPage } from 'next';
import { useMemo } from 'react';
//import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const libraries = useMemo(() => ['places'], []);
  const mapCenter = useMemo(
    () => ({ lat: 27.672932021393862, lng: 85.31184012689732 }),
    []
  );

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <GoogleMap
        options={mapOptions}
        zoom={14}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: '635px', height: '550px' }}
        onLoad={() => console.log('Map Component Loaded...')}
      />
    </div>
  );
};

export default Home;

// function PdpLocation() {
//     return (
//         <div className="row-span-2">
//             <input type="text" value="" className="flex flex-row rounded border border-solid border-mcklggrey items-center gap-2 w-full h-12 bg-mcklightyellow " placeholder="Search by keyword or item #" title="Search" role="combobox" />
//             <p className="text-sofia-reg font-normal text-sm text-mcknormalgrey py-6">City, State or Zip code</p>
//             <img className="mb-6" src="images/map.png" alt="map" />
//         </div>
//     );
// }
// export default PdpLocation;
