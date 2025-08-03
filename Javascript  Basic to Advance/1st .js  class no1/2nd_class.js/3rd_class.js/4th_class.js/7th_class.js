const length = ' hi there           '.length; 

// The length of the string is 17, including spaces.

let capitalized = 'hi there'.toUpperCase( );
 
// The string is converted to uppercase, resulting in 'HI THERE'.

const lowerword = 'HI THERE'.toLowerCase();

// The string is converted to lowercase, resulting in 'hi there'.

const Faltumassge = '             Hi Dear Students, Welcome to the class!                ' .trim();

// The string is trimmed of leading and trailing whitespace, resulting in 'Hi Dear Students, Welcome to the class!


const trimMethod = '             Hi Dear Students, Welcome to the class!                '.trimEnd();

// The string is trimmed of leading whitespace, resulting in 'Hi Dear Students, Welcome to the class!                '.

const trimMethod2 = '             Hi Dear Students, Welcome to the class!                '.trimStart();

// Methods (With Aroument )

const  time = '2023-10-01T12:00:00Z   My Event' .includes(":") ; 

// The string is checked for the presence of a colon, returning true since it contains ':'.

const time2 = '2023-10-01T12:00:00Z   My Event' .indexOf( 'My' ) ;

const introsring = 'Hello, my name is John Doe. I am a software developer.' .replace( 'Hello, my name is John Doe' , ' My name  is  owais   '  ) ;

// The string 'Hello, my name is John Doe' is replaced with 'My name is owais', resulting in 'My name


const introsring2 = 'Hello, my name is John Doe. I am a software developer.' .replaceAll( 'Hello, my name is John Doe' , ' My name  is  owais   '  )  ;


// The string 'Hello, my name is John Doe' is replaced with 'My name is owais' in all occurrences, resulting in 'My name is owais. I am a software developer.'.


const introsring3 = 'Hello, my name is John Doe. I am a software developer.' .concat(  '  ' , capitalized   ) ;


const bankaccount =  ' 8373' .padEnd( 17 , '*' ) 


const Studentsdata = ' 1st.js class no1/2nd_class.js/3rd_class.js/4th_class.js/7th_class.js' .charAt( '5' ) ;

// The character at index 5 of the string is returned, which is 'c'.


const Studentsdata2 = ' 1St.js class no1/2nd_class.js/3rd_class.js/4th_class.js/7th_class.js' .charCodeAt( 2 ) ;










