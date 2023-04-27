function PdpLocation() {
    return (
        <div className="row-span-2">
            <form>
                <input type="text" value="" className="flex flex-row rounded border border-solid border-mcklggrey items-center gap-2 w-full h-12 bg-mcklightyellow " placeholder="Search by keyword or item #" title="Search" role="combobox" />
            </form>
            <p className="text-sofia-reg font-normal text-sm text-mcknormalgrey py-6">City, State or Zip code</p>
            <img className="mb-6" src="images/map.png" alt="map" />
        </div>
    );
}
export default PdpLocation;
