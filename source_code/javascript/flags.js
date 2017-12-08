
class Flag {

    constructor(id, name, shortname, red, orange, yellow, green, blue, purple, brown, white, black, circle, triangle, star, sun, moon, cross, tricolorhorizontal, tricolorvertical, bicolorhorizontal, imagelocation) {
        this._id = id;
        this._name = name;
        this._shortname = shortname;
        this._imagelocation = imagelocation;
        this._red = red;
        this._orange = orange;
        this._yellow = yellow;
        this._green = green;
        this._blue = blue;
        this._purple = purple;
        this._brown = brown;
        this._white = white;
        this._black = black;
        this._circle = circle;
        this._triangle = triangle;
        this._star = star;
        this._sun = sun;
        this._moon = moon;
        this._cross = cross;
        this._tricolorhorizontal = tricolorhorizontal;
        this._tricolorvertical = tricolorvertical;
        this._bicolorhorizontal = bicolorhorizontal;

    };

    // Name
    set setName(value) {
        this._name = value;
    }

    get getName() {
        return this._name;
    }

    // Id
    get getID() {
        return this._id;
    }

    // Short Name
    set setShortName(value) {
        this._shortname = value;
    }

    get getShortName() {
        return this._shortname;
    }

    // Image Location
    set setImageLocation(value) {
        this._imagelocation = value;
    }

    get getImageLocation() {
        return this._imagelocation;
    }

    // Red
    set setRed(value) {
        this._red = value;
    }

    get getRed() {
        return this._red;
    }

    // Orange
    set setOrange(value) {
        this._orange = value;
    }

    get getOrange() {
        return this._orange;
    }

    // Yellow
    set setYellow(value) {
        this._yellow = value;
    }

    get getYellow() {
        return this._yellow;
    }

    // Green
    set setGreen(value) {
        this._green = value;
    }

    get getGreen() {
        return this._green;
    }

    // Blue
    set setBlue(value) {
        this._blue = value;
    }

    get getBlue() {
        return this._blue;
    }

    // Purple
    set setPurple(value) {
        this._purple = value;
    }

    get getPurple() {
        return this._purple;
    }

    // Brown
    set setBrown(value) {
        this._brown = value;
    }

    get getBrown() {
        return this._brown;
    }

    // White
    set setWhite(value) {
        this._white = value;
    }

    get getWhite() {
        return this._white;
    }

    // Black
    set setBlack(value) {
        this._black = value;
    }

    get getBlack() {
        return this._black;
    }

    // Circle
    set setCircle(value) {
        this._circle = value;
    }

    get getCircle() {
        return this._circle;
    }

    // Triangle
    set setTriangle(value) {
        this._triangle = value;
    }

    get getTriangle() {
        return this._triangle;
    }

    // Star
    set setStar(value) {
        this._star = value;
    }

    get getStar() {
        return this._star;
    }

    // Sun
    set setSun(value) {
        this._sun = value;
    }

    get getSun() {
        return this._sun;
    }

    // Moon
    set setMoon(value) {
        this._moon = value;
    }

    get getMoon() {
        return this._moon;
    }

    // Cross
    set setCross(value) {
        this._cross = value;
    }

    get getCross() {
        return this._cross;
    }

    // Tri Color Horizontal
    set setTriColorHorizontal(value) {
        this._tricolorhorizontal = value;
    }

    get getTriColorHorizontal() {
        return this._tricolorhorizontal;
    }

    // Tri Color Vertical
    set setTriColorVertical(value) {
        this._tricolorvertical = value;
    }

    get getTriColorVertical() {
        return this._tricolorvertical;
    }

    // Bi Color Horizontal
    set setBiColorHorizontal(value) {
        this._bicolorhorizontal = value;
    }

    get getBiColorHorizontal() {
        return this._bicolorhorizontal;
    }

}


// create a flags list - using Collection Set
let list = [];

// string name, string shortName, bool red, bool orange, bool yellow, bool green, bool blue, bool purple, bool brown, bool white, bool black, bool circle, bool triangle, bool star, bool sun, bool moon, bool cross, bool triColorHorz, bool triColorVert, bool biColorHorz, string imgName
    list.push(new Flag(1, "Afghanistan", "AF", true, false, false, true, false, false, false, false, true, false, false, false, false, false, false, false, true, false, "flag-of-Afghanistan"));
    list.push(new Flag(2, "Albania","", true, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, "flag-of-Albania"));
    list.push(new Flag(3, "Algeria", "", true, false, false, true, false, false, false, true, false, false, false, true, false, true, false, false, false, false, "flag-of-Algeria"));
    list.push(new Flag(4, "Andorra", "", true, false, true, false, true, false, false, false, false, false, false, false, false, false, false, false, true, false, "flag-of-Andorra"));
    list.push(new Flag(5, "Angola", "", true, false, true, false, false, false, false, false, true, false, false, true, false, false, false, false, false, true, "flag-of-Angola"));
    list.push(new Flag(6, "Antigua_and_Barbuda", "", true, false, true, false, true, false, false, true, true, false, true, false, true, false, false, false, false, false, "flag-of-Antigua"));
    list.push(new Flag(7, "Argentina", "", false, false, false, false, true, false, false, true, false, true, false, false, true, false, false, true, false, false, "flag-of-Argentina"));
    list.push(new Flag(8, "Armenia", "", true, true, false, false, true, false, false, false, false, false, false, false, false, false, false, true, false, false, "flag-of-Armenia"));
    list.push(new Flag(9, "Australia", "", true, false, false, false, true, false, false, true, false, false, true, true, false, false, true, false, false, false, "flag-of-Australia"));
    list.push(new Flag(10, "Austria", "", true, false, false, false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, "flag-of-Austria"));
    list.push(new Flag(11, "Azerbaijan", "", true, false, false, true, true, false, false, true, false, false, false, true, false, true, false, true, false, false, "flag-of-Azerbaijan"));
    list.push(new Flag(12, "Bahamas", "", false, false, true, false, true, false, false, false, true, false, true, false, false, false, false, true, false, false, "flag-of-Bahamas"));
    list.push(new Flag(13, "Bahrain", "", true, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, "flag-of-Bahrain"));
    list.push(new Flag(14, "Bangladesh", "", true, false, false, true, false, false, false, false, false, true, false, false, false, false, false, false, false, false, "flag-of-Bangladesh"));
    list.push(new Flag(15, "Barbados", "", false, false, true, false, true, false, false, false, true, false, false, false, false, false, false, false, true, false, "flag-of-Barbados"));
    list.push(new Flag(16, "Belarus", "", true, false, false, true, false, false, false, true, false, false, false, false, false, false, false, false, false, true, "flag-of-Belarus"));
    list.push(new Flag(17, "Belgium", "", true, false, true, false, false, false, false, false, true, false, false, false, false, false, false, false, true, false, "flag-of-Belgium"));
    list.push(new Flag(18, "Belize", "", true, false, true, true, true, false, true, true, false, true, false, false, false, false, false, false, false, false, "flag-of-Belize"));
    list.push(new Flag(19, "Benin", "", true, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, true, "flag-of-Benin"));
    list.push(new Flag(20, "Bhutan", "", false, true, true, false, false, false, false, true, false, false, true, false, false, false, false, false, false, false, "flag-of-Bhutan"));
    list.push(new Flag(21, "Bolivia", "", true, false, true, true, false, false, false, false, false, false, false, false, false, false, false, true, false, false, "flag-of-Bolivia"));
    list.push(new Flag(22, "Bosnia_and_Herzegovina", "Bosnia", false, false, true, false, true, false, false, true, false, false, true, true, false, false, false, false, false, false, "flag-of-Bosnia-Herzegovina"));
    list.push(new Flag(23, "Botswana", "", false, false, false, false, true, false, false, true, true, false, false, false, false, false, false, false, false, false, "flag-of-Botswana"));
    list.push(new Flag(24, "Brazil", "", false, false, true, true, true, false, false, true, false, true, false, false, false, false, false, false, false, false, "flag-of-Brazil"));
    list.push(new Flag(25, "Brunei", "", true, false, true, false, false, false, false, true, true, false, true, false, false, false, false, false, false, false, "flag-of-Brunei"));
    list.push(new Flag(26, "Bulgaria", "", true, false, false, true, false, false, false, true, false, false, false, false, false, false, false, true, false, false, "flag-of-Bulgaria"));
    list.push(new Flag(27, "Burkina_Faso", "", true, false, true, true, false, false, false, false, false, false, false, true, false, false, false, false, false, true, "flag-of-Burkina-Faso"));
    list.push(new Flag(28, "Burundi", "", true, false, false, true, false, false, false, true, false, true, true, true, false, false, false, false, false, false, "flag-of-Burundi"));
    list.push(new Flag(29, "Cabo_Verde", "", true, false, true, false, true, false, false, true, false, false, false, true, false, false, false, false, false, false, "flag-of-Cabo-Verde"));
    list.push(new Flag(30, "Cambodia", "", true, false, false, false, true, false, false, true, false, false, false, false, false, false, false, true, false, false, "flag-of-Cambodia"));
    list.push(new Flag(31, "Cameroon", "", true, false, true, true, false, false, false, false, false, false, false, true, false, false, false, false, true, false, "flag-of-Cameroon"));
    list.push(new Flag(32, "Canada", "", true, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, true, false, "flag-of-Canada"));
    list.push(new Flag(33, "Central_African_Republic", "CAR", true, false, true, true, true, false, false, true, false, false, false, true, false, false, false, false, false, false, "flag-of-Central-African-Republic"));
    list.push(new Flag(34, "Chad", "", true, false, true, false, true, false, false, false, false, false, false, false, false, false, false, false, true, false, "flag-of-Chad"));
    list.push(new Flag(35, "Chile", "", true, false, false, false, true, false, false, true, false, false, false, true, false, false, false, false, false, true, "flag-of-Chile"));
    list.push(new Flag(36, "China", "", true, false, true, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, "flag-of-China"));
    list.push(new Flag(37, "Colombia", "", true, false, true, false, true, false, false, false, false, false, false, false, false, false, false, true, false, false, "flag-of-Colombia"));
    list.push(new Flag(38, "Comoros", "", true, false, true, true, true, false, false, true, false, false, true, true, false, true, false, false, false, false, "flag-of-Comoros"));
    list.push(new Flag(39, "Democratic_Republic_of_the_Congo", "DR Congo", true, false, true, false, true, false, false, false, false, false, true, true, false, false, false, false, false, false, "flag-of-Congo-Democratic-Republic-of"));
    list.push(new Flag(40, "Republic _of_the_Congo", "Congo", true, false, true, true, false, false, false, false, false, false, true, false, false, false, false, false, false, false, "flag-of-Congo"));
    list.push(new Flag(41, "Costa_Rica", "", true, false, true, true, true, false, false, true, false, false, false, false, false, false, false, false, false, false, "flag-of-Costa-Rica"));
    list.push(new Flag(42, "Cote_d'Ivoire", "", false, true, false, true, false, false, false, true, false, false, false, false, false, false, false, false, true, false, "flag-of-Cote-d-Ivoire"));
    list.push(new Flag(43, "Croatia", "", true, false, true, false, true, false, false, true, false, false, false, false, false, false, false, true, false, false, "flag-of-Croatia"));
    list.push(new Flag(44, "Cuba", "", true, false, false, false, true, false, false, true, false, false, true, true, false, false, false, false, false, false, "flag-of-Cuba"));
    list.push(new Flag(45, "Cyprus", "", false, false, true, true, false, false, false, true, false, false, false, false, false, false, false, false, false, false, "flag-of-Cyprus"));
    list.push(new Flag(46, "Czech_Republic", "", true, false, false, false, true, false, false, true, false, false, true, false, false, false, false, false, false, true, "flag-of-Czech-Republic"));
    list.push(new Flag(47, "Denmark", "", true, false, false, false, false, false, false, true, false, false, false, false, false, false, true, false, false, false, "flag-of-Denmark"));
    list.push(new Flag(48, "Djibouti", "", true, false, false, true, true, false, false, true, false, false, true, true, false, false, false, false, false, true, "flag-of-Djibouti"));
    list.push(new Flag(49, "Dominica", "", true, false, true, true, false, true, true, true, true, true, false, true, false, false, true, false, false, false, "flag-of-Dominica"));
    list.push(new Flag(50, "Dominican_Republic", "", true, false, false, true, true, false, false, true, false, false, false, false, false, false, true, false, false, false, "flag-of-Dominican-Republic"));
    list.push(new Flag(51, "Ecuador", "", true, false, true, false, true, false, true, false, false, false, false, false, false, false, false, true, false, false, "flag-of-Ecuador"));
    list.push(new Flag(52, "Egypt", "", true, false, true, false, false, false, false, true, true, false, false, false, false, false, false, true, false, false, "flag-of-Egypt"));
    list.push(new Flag(53, "El_Salvador", "", false, false, false, false, true, false, false, true, false, false, false, false, false, false, false, true, false, false, "flag-of-El-Salvador"));
    list.push(new Flag(54, "Equatorial_Guinea", "", true, false, false, true, true, false, false, true, false, false, true, false, false, false, false, true, false, false, "flag-of-Equatorial-Guinea"));
    list.push(new Flag(55, "Eritrea", "", true, false, true, true, true, false, false, false, false, false, true, false, false, false, false, false, false, false, "flag-of-Eritrea"));
    list.push(new Flag(56, "Estonia", "", false, false, false, false, true, false, false, true, true, false, false, false, false, false, false, true, false, false, "flag-of-Estonia"));
    list.push(new Flag(57, "Ethiopia", "", true, false, true, true, true, false, false, false, false, true, true, true, false, false, false, true, false, false, "flag-of-Ethiopia"));
    list.push(new Flag(58, "Fiji", "", true, false, true, true, true, false, true, true, false, false, true, false, false, false, true, false, false, false, "flag-of-Fiji"));
    list.push(new Flag(59, "Finland", "", false, false, false, false, true, false, false, true, false, false, false, false, false, false, true, false, false, false, "flag-of-Finland"));
    list.push(new Flag(60, "France", "", true, false, false, false, true, false, false, true, false, false, false, false, false, false, false, false, true, false, "flag-of-France"));
    list.push(new Flag(61, "Gabon", "", false, false, true, true, true, false, false, false, false, false, false, false, false, false, false, true, false, false, "flag-of-Gabon"));
    list.push(new Flag(62, "Gambia", "", true, false, false, true, true, false, false, true, false, false, false, false, false, false, false, false, false, false, "flag-of-Gambia"));
    list.push(new Flag(63, "Georgia", "", true, false, false, false, false, false, false, true, false, false, false, false, false, false, true, false, false, false, "flag-of-Georgia"));
    list.push(new Flag(64, "Germany", "", true, false, true, false, false, false, false, false, true, false, false, false, false, false, false, true, false, false, "flag-of-Germany"));
    list.push(new Flag(65, "Ghana", "", true, false, true, true, false, false, false, false, true, false, false, true, false, false, false, true, false, false, "flag-of-Ghana"));
    list.push(new Flag(66, "Greece", "", false, false, false, false, true, false, false, true, false, false, false, false, false, false, true, false, false, false, "flag-of-Greece"));
    list.push(new Flag(67, "Grenada", "", true, false, true, true, false, false, false, false, false, true, true, true, false, false, false, false, false, false, "flag-of-Grenada"));
    list.push(new Flag(68, "Guatemala", "", false, false, true, true, true, false, true, true, false, false, false, false, false, false, false, false, true, false, "flag-of-Guatemala"));
    list.push(new Flag(69, "Guinea", "", true, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, true, false, "flag-of-Guinea"));
    list.push(new Flag(70, "Guinea-Bissau", "", true, false, true, true, false, false, false, false, true, false, false, true, false, false, false, false, false, true, "flag-of-Guinea-Bissau"));
    list.push(new Flag(71, "Guyana", "", true, false, true, true, false, false, false, true, true, false, true, false, false, false, false, false, false, false, "flag-of-Guyana"));
    list.push(new Flag(72, "Haiti", "", true, false, true, true, true, false, false, true, false, false, false, false, false, false, false, false, false, true, "flag-of-Haiti"));
    list.push(new Flag(73, "Honduras", "", false, false, false, false, true, false, false, true, false, false, false, true, false, false, false, true, false, false, "flag-of-Honduras"));
    list.push(new Flag(74, "Hungary", "", true, false, false, true, false, false, false, true, false, false, false, false, false, false, false, true, false, false, "flag-of-Hungary"));
    list.push(new Flag(75, "Iceland", "", true, false, false, false, true, false, false, true, false, false, false, false, false, false, true, false, false, false, "flag-of-Iceland"));
    list.push(new Flag(76, "India", "", false, true, false, true, true, false, false, true, false, true, false, false, false, false, false, true, false, false, "flag-of-India"));
    list.push(new Flag(77, "Indonesia", "", true, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, true, "flag-of-Indonesia"));
    list.push(new Flag(78, "Iran", "", true, false, false, true, false, false, false, true, false, false, false, false, false, false, false, true, false, false, "flag-of-Iran"));
    list.push(new Flag(79, "Iraq", "", true, false, false, true, false, false, false, true, true, false, false, false, false, false, false, true, false, false, "flag-of-Iraq"));
    list.push(new Flag(80, "Ireland", "", false, true, false, true, false, false, false, true, false, false, false, false, false, false, false, false, true, false, "flag-of-Ireland"));
    list.push(new Flag(81, "Israel", "", false, false, false, false, true, false, false, true, false, false, true, true, false, false, false, false, false, false, "flag-of-Israel"));
    list.push(new Flag(82, "Italy", "", true, false, false, true, false, false, false, true, false, false, false, false, false, false, false, false, true, false, "flag-of-Italy"));
    list.push(new Flag(83, "Jamaica", "", false, false, true, true, false, false, false, false, true, false, true, false, false, false, false, false, false, false, "flag-of-Jamaica"));
    list.push(new Flag(84, "Japan", "", true, false, false, false, false, false, false, true, false, true, false, false, false, false, false, false, false, false, "flag-of-Japan"));
    list.push(new Flag(85, "Jordan", "", true, false, false, true, false, false, false, true, true, false, true, true, false, false, false, true, false, false, "flag-of-Jordan"));
    list.push(new Flag(86, "Kazakhstan", "", false, false, true, false, true, false, false, false, false, true, false, false, true, false, false, false, false, false, "flag-of-Kazakhstan"));
    list.push(new Flag(87, "Kenya", "", true, false, false, true, false, false, false, true, true, false, false, false, false, false, false, false, false, false, "flag-of-Kenya"));
    list.push(new Flag(88, "Kiribati", "", true, false, true, false, true, false, false, true, false, false, false, false, true, false, false, false, false, false, "flag-of-Kiribati"));
    list.push(new Flag(89, "Kosovo", "", false, false, true, false, true, false, false, true, false, false, false, true, false, false, false, false, false, false, "flag-of-Kosovo"));
    list.push(new Flag(90, "Kuwait", "", true, false, false, true, false, false, false, true, true, false, false, false, false, false, false, true, false, false, "flag-of-Kuwait"));
    list.push(new Flag(91, "Kyrgyzstan", "", true, false, true, false, false, false, false, false, false, true, false, false, true, false, false, false, false, false, "flag-of-Kyrgyzstan"));
    list.push(new Flag(92, "Laos", "", true, false, false, false, true, false, false, true, false, true, false, false, false, false, false, true, false, false, "flag-of-Laos"));
    list.push(new Flag(93, "Latvia", "", true, false, false, false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, "flag-of-Latvia"));
    list.push(new Flag(94, "Lebanon", "", true, false, false, true, false, false, false, true, false, false, false, false, false, false, false, true, false, false, "flag-of-Lebanon"));
    list.push(new Flag(95, "Lesotho", "", false, false, false, true, true, false, false, true, true, false, false, false, false, false, false, true, false, false, "flag-of-Lesotho"));
    list.push(new Flag(96, "Liberia", "", true, false, false, false, true, false, false, true, false, false, false, true, false, false, false, false, false, false, "flag-of-Liberia"));
    list.push(new Flag(97, "Libya", "", true, false, false, true, false, false, false, true, true, false, false, true, false, true, false, true, false, false, "flag-of-Libya"));
    list.push(new Flag(98, "Liechtenstein", "", true, false, true, false, true, false, false, false, true, false, false, false, false, false, false, false, false, true, "flag-of-Liechtenstein"));
    list.push(new Flag(99, "Lithuania", "", true, false, true, true, false, false, false, false, false, false, false, false, false, false, false, true, false, false, "flag-of-Lithuania"));
    list.push(new Flag(100, "Luxembourg", "", true, false, false, false, true, false, false, true, false, false, false, false, false, false, false, true, false, false, "flag-of-Luxembourg"));
    list.push(new Flag(101, "Macedonia", "", true, false, true, false, false, false, false, false, false, true, true, false, true, false, false, false, false, false, "flag-of-Macedonia"));
    list.push(new Flag(102, "Madagascar", "", true, false, false, true, false, false, false, true, false, false, false, false, false, false, false, false, false, true, "flag-of-Madagascar"));
    list.push(new Flag(103, "Malawi", "", true, false, false, true, false, false, false, false, true, false, false, false, true, false, false, true, false, false, "flag-of-Malawi"));
    list.push(new Flag(104, "Malaysia", "", true, false, true, false, true, false, false, true, false, false, false, false, true, true, false, false, false, false, "flag-of-Malaysia"));
    list.push(new Flag(105, "Maldives", "", true, false, false, true, false, false, false, true, false, false, false, false, false, true, false, false, false, false, "flag-of-Maldives"));
    list.push(new Flag(106, "Mali", "", true, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, true, false, "flag-of-Mali"));
    list.push(new Flag(107, "Malta", "", true, false, false, false, false, false, false, true, false, false, false, false, false, false, true, false, false, false, "flag-of-Malta"));
    list.push(new Flag(108, "Marshall_Islands", "", false, true, false, false, true, false, false, true, false, false, true, true, false, false, false, false, false, false, "flag-of-Marshall-Islands"));
    list.push(new Flag(109, "Mauritania", "", false, false, true, true, false, false, false, false, false, false, false, true, false, true, false, false, false, false, "flag-of-Mauritania"));
    list.push(new Flag(110, "Mauritius", "", true, false, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, "flag-of-Mauritius"));
    list.push(new Flag(111, "Mexico", "", true, false, false, true, false, false, true, true, false, false, false, false, false, false, false, false, true, false, "flag-of-Mexico"));
    list.push(new Flag(112, "Micronesia", "", false, false, false, false, true, false, false, true, false, false, false, true, false, false, false, false, false, false, "flag-of-Micronesia"));
    list.push(new Flag(113, "Moldova", "", true, false, true, true, true, false, true, false, false, false, false, false, false, false, false, false, true, false, "flag-of-Moldova"));
    list.push(new Flag(114, "Monaco", "", true, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, true, "flag-of-Monaco"));
    list.push(new Flag(115, "Mongolia", "", true, false, true, false, true, false, false, false, false, true, true, false, false, false, false, false, true, false, "flag-of-Mongolia"));
    list.push(new Flag(116, "Montenegro", "", true, false, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, "flag-of-Montenegro"));
    list.push(new Flag(117, "Morocco", "", true, false, false, true, false, false, false, false, false, false, true, true, false, false, false, false, false, false, "flag-of-Morocco"));
    list.push(new Flag(118, "Mozambique", "", true, false, true, true, false, false, false, true, true, false, true, true, false, false, false, false, false, false, "flag-of-Mozambique"));
    list.push(new Flag(119, "Myanmar", "", true, false, true, true, false, false, false, true, false, false, false, true, false, false, false, true, false, false, "flag-of-Myanmar"));
    list.push(new Flag(120, "Namibia", "", true, false, true, true, false, false, false, true, false, true, true, false, true, false, false, false, false, false, "flag-of-Namibia"));
    list.push(new Flag(121, "Nauru", "", false, false, true, false, true, false, false, true, false, false, false, true, true, false, false, false, false, false, "flag-of-Nauru"));
    list.push(new Flag(122, "Nepal", "", true, false, false, false, true, false, false, true, false, false, false, true, true, false, false, false, false, false, "flag-of-Nepal"));
    list.push(new Flag(123, "Netherlands", "", true, false, false, false, true, false, false, true, false, false, false, false, false, false, false, true, false, false, "flag-of-Netherlands"));
    list.push(new Flag(124, "New_Zealand", "", true, false, false, false, true, false, false, true, false, false, true, true, false, false, true, false, false, false, "flag-of-New-Zealand"));
    list.push(new Flag(125, "Nicaragua", "", false, false, false, false, true, false, false, true, false, true, true, false, false, false, false, true, false, false, "flag-of-Nicaragua"));
    list.push(new Flag(126, "Niger", "", false, true, false, true, false, false, false, true, false, true, false, false, false, false, false, true, false, false, "flag-of-Niger"));
    list.push(new Flag(127, "Nigeria", "", false, false, false, true, false, false, false, true, false, false, false, false, false, false, false, false, true, false, "flag-of-Nigeria"));
    list.push(new Flag(128, "North_Korea", "", true, false, false, false, true, false, false, true, false, true, false, true, false, false, false, false, false, false, "flag-of-Korea-North"));
    list.push(new Flag(129, "Norway", "", true, false, false, false, true, false, false, true, false, false, false, false, false, false, true, false, false, false, "flag-of-Norway"));
    list.push(new Flag(130, "Oman", "", true, false, false, true, false, false, false, true, false, false, false, false, false, false, false, false, false, false, "flag-of-Oman"));
    list.push(new Flag(131, "Pakistan", "", false, false, false, true, false, false, false, true, false, false, false, true, false, true, false, false, false, false, "flag-of-Pakistan"));
    list.push(new Flag(132, "Palau", "", false, false, true, false, true, false, false, false, false, true, false, false, false, false, false, false, false, false, "flag-of-Palau"));
    list.push(new Flag(133, "Palestine", "", true, false, false, true, false, false, false, true, true, false, true, false, false, false, false, true, false, false, "flag-of-Palestine"));
    list.push(new Flag(134, "Panama", "", true, false, false, false, true, false, false, true, false, false, false, true, false, false, false, false, false, false, "flag-of-Panama"));
    list.push(new Flag(135, "Papua_New_Guinea", "", true, false, true, false, false, false, false, true, true, false, true, true, false, false, false, false, false, false, "flag-of-Papua-New-Guinea"));
    list.push(new Flag(136, "Paraguay", "", true, false, false, false, true, false, false, true, false, true, false, false, false, false, false, true, false, false, "flag-of-Paraguay"));
    list.push(new Flag(137, "Peru", "", true, false, true, true, false, false, false, true, false, false, false, false, false, false, false, false, true, false, "flag-of-Peru"));
    list.push(new Flag(138, "Philippines", "", true, false, true, false, true, false, false, true, false, true, true, true, true, false, false, false, false, true, "flag-of-Philippines"));
    list.push(new Flag(139, "Poland", "", true, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, true, "flag-of-Poland"));
    list.push(new Flag(140, "Portugal", "", true, false, true, true, true, false, false, true, false, true, false, false, false, false, false, false, false, false, "flag-of-Portugal"));
    list.push(new Flag(141, "Qatar", "", true, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, "flag-of-Qatar"));
    list.push(new Flag(142, "Romania", "", true, false, true, false, true, false, false, false, false, false, false, false, false, false, false, false, true, false, "flag-of-Romania"));
    list.push(new Flag(143, "Russia", "", true, false, false, false, true, false, false, true, false, false, false, false, false, false, false, true, false, false, "flag-of-Russia"));
    list.push(new Flag(144, "Rwanda", "", false, false, true, true, true, false, false, false, false, true, false, false, true, false, false, true, false, false, "flag-of-Rwanda"));
    list.push(new Flag(145, "Saint_Kitts_and_Nevis", "St Kitts & Nevis", true, false, true, true, false, false, false, true, true, false, true, true, false, false, false, false, false, false, "flag-of-St-Kitts-Nevis"));
    list.push(new Flag(146, "Saint_Lucia", "", false, false, true, false, true, false, false, true, true, false, true, false, false, false, false, false, false, false, "flag-of-St-Lucia"));
    list.push(new Flag(147, "Saint_Vincent_and_the_Grenadines", "St Vincent", false, false, true, true, true, false, false, false, false, false, false, false, false, false, false, false, true, false, "flag-of-St-Vincent-the-Grenadines"));
    list.push(new Flag(148, "Samoa", "", true, false, false, false, true, false, false, true, false, false, false, true, false, false, false, false, false, false, "flag-of-Samoa"));
    list.push(new Flag(149, "San_Marino", "", false, false, true, true, true, false, false, true, false, false, false, false, false, false, false, false, false, true, "flag-of-San-Marino"));
    list.push(new Flag(150, "Sao_Tome_and_Principe", "Sao Tome & Principe", true, false, true, true, false, false, false, false, true, false, true, true, false, false, false, true, false, false, "flag-of-Sao-Tome-Principe"));
    list.push(new Flag(151, "Saudi_Arabia", "", false, false, false, true, false, false, false, true, false, false, false, false, false, false, false, false, false, false, "flag-of-Saudi-Arabia"));
    list.push(new Flag(152, "Senegal", "", true, false, true, true, false, false, false, false, false, false, false, true, false, false, false, false, true, false, "flag-of-Senegal"));
    list.push(new Flag(153, "Serbia", "", true, false, true, false, true, false, false, true, false, false, false, false, false, false, false, true, false, false, "flag-of-Serbia"));
    list.push(new Flag(154, "Seychelles", "", true, false, true, true, true, false, false, true, false, false, true, false, false, false, false, false, false, false, "flag-of-Seychelles"));
    list.push(new Flag(155, "Sierra_Leone", "", false, false, false, true, true, false, false, true, false, false, false, false, false, false, false, true, false, false, "flag-of-Sierra-Leone"));
    list.push(new Flag(156, "Singapore", "", true, false, false, false, false, false, false, true, false, false, false, true, false, true, false, false, false, true, "flag-of-Singapore"));
    list.push(new Flag(157, "Slovakia", "", true, false, false, false, true, false, false, true, false, false, false, false, false, false, true, true, false, false, "flag-of-Slovakia"));
    list.push(new Flag(158, "Slovenia", "", true, false, true, false, true, false, false, true, false, false, false, true, false, false, false, true, false, false, "flag-of-Slovenia"));
    list.push(new Flag(159, "Solomon_Islands", "", false, false, true, true, true, false, false, true, false, false, true, true, false, false, false, false, false, false, "flag-of-Solomon-Islands"));
    list.push(new Flag(160, "Somalia", "", false, false, false, false, true, false, false, true, false, false, false, true, false, false, false, false, false, false, "flag-of-Somalia"));
    list.push(new Flag(161, "South_Africa", "", true, false, true, true, true, false, false, true, true, false, true, false, false, false, false, false, false, false, "flag-of-South-Africa"));
    list.push(new Flag(162, "South_Korea", "", true, false, false, false, true, false, false, true, true, true, false, false, false, false, false, false, false, false, "flag-of-Korea-South"));
    list.push(new Flag(163, "South_Sudan", "", true, false, true, true, true, false, false, true, true, false, true, true, false, false, false, true, false, false, "flag-of-South-Sudan"));
    list.push(new Flag(164, "Spain", "", true, false, true, false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, "flag-of-Spain"));
    list.push(new Flag(165, "Sri_Lanka", "", true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, "flag-of-Sri-Lanka"));
    list.push(new Flag(166, "Sudan", "", true, false, false, true, false, false, false, true, true, false, true, false, false, false, false, true, false, false, "flag-of-Sudan"));
    list.push(new Flag(167, "Suriname", "", true, false, true, true, false, false, false, true, false, false, false, true, false, false, false, false, false, false, "flag-of-Suriname"));
    list.push(new Flag(168, "Swaziland", "", true, false, true, false, true, false, false, true, true, false, false, false, false, false, false, false, false, false, "flag-of-Swaziland"));
    list.push(new Flag(169, "Sweden", "", false, false, true, false, true, false, false, false, false, false, false, false, false, false, true, false, false, false, "flag-of-Sweden"));
    list.push(new Flag(170, "Switzerland", "", true, false, false, false, false, false, false, true, false, false, false, false, false, false, true, false, false, false, "flag-of-Switzerland"));
    list.push(new Flag(171, "Syria", "", true, false, false, true, false, false, false, true, true, false, false, true, false, false, false, true, false, false, "flag-of-Syria"));
    list.push(new Flag(172, "Taiwan", "", true, false, false, false, true, false, false, true, false, true, false, false, true, false, false, false, false, false, "flag-of-Taiwan"));
    list.push(new Flag(173, "Tajikistan", "", true, false, true, true, false, false, false, true, false, false, false, true, false, false, false, true, false, false, "flag-of-Tajikistan"));
    list.push(new Flag(174, "Tanzania", "", false, false, true, true, true, false, false, false, true, false, true, false, false, false, false, false, false, false, "flag-of-Tanzania"));
    list.push(new Flag(175, "Thailand", "", true, false, false, false, true, false, false, true, false, false, false, false, false, false, false, false, false, false, "flag-of-Thailand"));
    list.push(new Flag(176, "Timor-Leste", "", true, false, true, false, false, false, false, true, true, false, true, true, false, false, false, false, false, false, "flag-of-Timor-Leste"));
    list.push(new Flag(177, "Togo", "", true, false, true, true, false, false, false, true, false, false, false, true, false, false, false, false, false, false, "flag-of-Togo"));
    list.push(new Flag(178, "Tonga", "", true, false, false, false, false, false, false, true, false, false, false, false, false, false, true, false, false, false, "flag-of-Tonga"));
    list.push(new Flag(179, "Trinidad_and_Tobago", "", true, false, false, false, false, false, false, true, true, false, true, false, false, false, false, false, false, false, "flag-of-Trinidad-Tobago"));
    list.push(new Flag(180, "Tunisia", "", true, false, false, false, false, false, false, true, false, true, false, true, false, true, false, false, false, false, "flag-of-Tunisia"));
    list.push(new Flag(181, "Turkey", "", true, false, false, false, false, false, false, true, false, false, false, true, false, true, false, false, false, false, "flag-of-Turkey"));
    list.push(new Flag(182, "Turkmenistan", "", true, false, true, true, false, false, false, true, false, false, false, true, false, true, false, false, false, false, "flag-of-Turkmenistan"));
    list.push(new Flag(183, "Tuvalu", "", true, false, true, false, true, false, false, true, false, false, true, true, false, false, true, false, false, false, "flag-of-Tuvalu"));
    list.push(new Flag(184, "Uganda", "", true, false, true, false, false, false, false, true, true, true, false, false, false, false, false, false, false, false, "flag-of-Uganda"));
    list.push(new Flag(185, "Ukraine", "", false, false, true, false, true, false, false, false, false, false, false, false, false, false, false, false, false, true, "flag-of-Ukraine"));
    list.push(new Flag(186, "United_Arab_Emirates", "Emirates", true, false, false, true, false, false, false, true, true, false, false, false, false, false, false, true, false, false, "flag-of-United-Arab-Emirates"));
    list.push(new Flag(187, "United_Kingdom", "", true, false, false, false, true, false, false, true, false, false, true, false, false, false, true, false, false, false, "flag-of-United-Kingdom"));
    list.push(new Flag(188, "United_States_of_America", "USA", true, false, false, false, true, false, false, true, false, false, false, true, false, false, false, false, false, false, "flag-of-United-States-of-America"));
    list.push(new Flag(189, "Uruguay", "", false, false, true, false, true, false, false, true, false, false, false, false, true, false, false, false, false, false, "flag-of-Uruguay"));
    list.push(new Flag(190, "Uzbekistan", "", true, false, false, true, true, false, false, true, false, false, false, true, false, true, false, false, false, false, "flag-of-Uzbekistan"));
    list.push(new Flag(191, "Vanuatu", "", true, false, true, true, false, false, false, false, true, false, true, false, false, false, false, false, false, false, "flag-of-Vanuatu"));
    list.push(new Flag(192, "Vatican_City", "Vatican City", true, false, true, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, "flag-of-Vatican-City"));
    list.push(new Flag(193, "Venezuela", "", true, false, true, false, true, false, false, true, false, false, false, true, false, false, false, true, false, false, "flag-of-Venezuela"));
    list.push(new Flag(194, "Vietnam", "", true, false, true, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, "flag-of-Vietnam"));
    list.push(new Flag(195, "Yemen", "", true, false, false, false, false, false, false, true, true, false, false, false, false, false, false, true, false, false, "flag-of-Yemen"));
    list.push(new Flag(196, "Zambia", "", true, true, false, true, false, false, false, false, true, false, false, false, false, false, false, false, false, false, "flag-of-Zambia"));
    list.push(new Flag(197, "Zimbabwe", "", true, false, true, true, false, false, false, true, true, false, true, true, false, false, false, false, false, false, "flag-of-Zimbabwe"));
