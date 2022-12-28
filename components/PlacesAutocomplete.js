import React from 'react'

export const PlacesAutoComplete = ({ onPress, onSearchClear, placeholder, containerStyle, inputStyle, iconStyle, placesStyle, debounce = 700, userLocation }) => {
  const [places, setPlaces] = React.useState([])
  const [search, setSearch] = React.useState('')
  const debounceFindPlaces = React.useCallback(debounceFn(findPlaces, debounce), []);

  function findPlaces(text) {
    if(!text.trim()) {
      handleClearSearch()
      return;
    }
    GeocodingService
      .findPlaces(text, userLocation ?? {latitude: 0, longitude: 0})
      .then(places => setPlaces(places))
  }

  function handleClearSearch() {
    setSearch('')
    setPlaces([])
    onSearchClear();
  }

  function onPlacePress(item) {
    setSearch(item.placeName)
    setPlaces([])
    onPress(item)
  }

  function onSearchChange(text) {
    setSearch(text)
    debounceFindPlaces(text)
  }


  return (
    <View>
      <View style={[{flexDirection:"row",alignItems:"center",position:"relative"}, containerStyle]}>
        <TextInput 
          value={search}
          style={[{
            flex: 1, fontSize:24, padding: 3, paddingRight: 10
          }, inputStyle, {minHeight: 55}]}
          placeholder={placeholder}
          onChangeText={onSearchChange}
          selectionColor={'black'}
        /> 
        <IconFeather 
          onPress={handleClearSearch}
          style={[tw`text-lg text-gray-300 absolute right-3 ${search ? 'opacity-100' : 'opacity-0'}`, iconStyle]}
          name='x-circle' 
          type='feather' 
          size={23} 
        /> 
      </View>

      {places.length > 0 && (
        <FlatList
          data={places}
          style={[placesStyle, tw`flex-grow h-50 pb-10`]}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity 
              style={tw`flex-row py-3 border-b border-gray-100`}
              onPress={() => onPlacePress(item)}
            >
              <View style={tw`flex-1 py-1`}>
                <Text style={tw`text-black ml-2`}>
                  {item.placeName}
                </Text>
              </View>
            </TouchableOpacity>
          )}  
        />
      )}

    </View>
  );
}