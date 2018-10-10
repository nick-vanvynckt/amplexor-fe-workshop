export class IconHelper {
    public mapStringToClass(s: string): string {
        // tslint:disable-next-line:no-console
        console.log(s);
        if (s.indexOf('thunder') !== -1 || s.indexOf('storm') !== -1 || s.indexOf('tornado') !== -1 || s.indexOf('hurricane') !== -1 || s.indexOf('blizzard') !== -1) {
            return 'thundery';
        } else if (s.indexOf('fog') !== -1 || s.indexOf('haze') !== -1 || s.indexOf('smoke') !== -1) {
            return 'foggy';
        } else if (s.indexOf('a_mixture_of_sun_and_clouds') !== -1 || s.indexOf('breaks_of_sun_late') !== -1 || s.indexOf('partly_sunny') !== -1 || s.indexOf('more_clouds_than_sun') !== -1) {
            return 'suncloudy';
        } else if (s.indexOf('snow') !== -1 || s.indexOf('flurries') !== -1) {
            return 'snowy';
        } else if (s.indexOf('clear') !== -1 || s.indexOf('more_sun_than_clouds') !== -1 || (s.indexOf('sunny') !== -1 && s.indexOf('fog') === -1 && s.indexOf('partly') === -1)) {
            return 'sunny';
        } else if (s.indexOf('clounds') !== -1 || s.indexOf('overcast') !== -1 || (s.indexOf('cloud') !== -1 && s.indexOf('sun') === -1)) {
            return 'cloudy';
        } else if (s.indexOf('icy') !== -1 || s.indexOf('sleet') !== -1 || s.indexOf('precip') !== -1) {
            return 'haily';
        } else if (s.indexOf('showers') !== -1 || s.indexOf('rain') !== -1 || s.indexOf('sprinkles') !== -1 || s.indexOf('flood') !== -1 || s.indexOf('drizzle') !== -1) {
            return 'rainy';
        } 
        return '';
    }
}