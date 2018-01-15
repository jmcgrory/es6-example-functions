
  //**************************/
  //********* Arrays *********/
  //**************************/

    const companies = [
      { name: "Company One", category: "Finance", start: 1991, end: 2018 },
      { name: "Company Two", category: "Retail", start: 1981, end: 1989 },
      { name: "Company Three", category: "Auto", start: 1966, end: 1975 },
      { name: "Company Four", category: "Technology", start: 1925, end: 2009 },
      { name: "Company Five", category: "Finance", start: 1983, end: 1995 },
      { name: "Company Six", category: "Auto", start: 1995, end: 2018 },
      { name: "Company Seven", category: "Finance", start: 1989, end: 1992 },
      { name: "Company Eight", category: "Auto", start: 2008, end: 2014 },
      { name: "Company Nine", category: "Technology", start: 1962, end: 2010 },
      { name: "Company Ten", category: "Finance", start: 1978, end: 2018 },
      { name: "Company Eleven", category: "Technology", start: 1985, end: 2003 },
      { name: "Company Twelve", category: "Finance", start: 1980, end: 1990 },
      { name: "Company Thirteen", category: "Finance", start: 1956, end: 2005 },
      { name: "Company Fourteen", category: "Retail", start: 1911, end: 2000 }
    ];
    
    const ages = [33, 12, 44, 92, 5, 12, 10, 4, 32, 25, 39, 25, 15, 64, 13, 45, 54, 3, 30, 26];
  
  //***************************/
  //********* forEach *********/
  //***************************/

  // Standard for loop (ES5)
  /*
    for(var i = 0; i < companies.length; i++){
      var companyName = companies[i].name;
      console.log(companyName);
    }
  */

  // forEach loop with arrow function (ES6)
  /*
    companies.forEach((company, index)=>{
      console.log(company.name);
    });
  */
  
  //**************************/
  //********* filter *********/
  //**************************/

    // Standard for loop if legal to vote (ES5)
    /*
      var canDrink = [];
      for(var i = 0; i < ages.length; i++){
        var age = ages[i];
        if(age>=18) canDrink.push(age);
      }
      console.log(canDrink);
    */

    // If legal to vote (ES6)
    /*
      const canDrink = ages.filter(age => age >= 18);
      console.log(canDrink);
    */

    // Filtering retail companies (ES6)
    /*
      const retailCompanies = companies.filter(company=>company.category=='Retail');
      console.log(retailCompanies);
    */

    // Get all companies founded in the 80s (ES6)
    /*
      const only80s = companies.filter(company => {
        if(company.start >= 1980 && company.start < 1990) return true;
      });
      console.log(only80s);
    */

    // Get all companies who lasted 10+ years
    /*
      const tenPlusYears = companies.filter(company => (company.end - company.start) >= 10);
      console.log(tenPlusYears);
    */
  
  //***************************/
  //*********   map   *********/
  //***************************/

    // Create array of company names (ES6)
    /*
      const companyNames = companies.map(company => {
        return company.name;
      });
      console.log(companyNames);
    */

    // Return another from company names (ES6)
    /*
      const companyLengths = companies.map(company => {
        let companyLength = (company.end-company.start);
        return  `${company.name} (${companyLength} years)`;
      })
      console.log(companyLengths);
    */

    // Get square root of double company age (ES6)
    /*
      const agesMath = ages
        .map( age => age * 2 )
        .map( age => Math.sqrt(age) );
      console.log(agesMath);
    */

  //**************************/
  //*********  sort  *********/
  //**************************/

    // Sort companies by start date (ES6)
    /*
      const sortedCompanies = companies.sort( (a, b) => (a.start > b.start ? 1 : -1 ) );
      console.log(sortedCompanies);
    */

    // Sort ages by descending (ES6)
    /*
      const sortAges = ages.sort( (a, b) => b - a );
      console.log(sortAges);
    */
  
  //**************************/
  //********* reduce *********/
  //**************************/

    // Standard add all ages together (ES5)
    /*
      var ageSum = 0;
      for(var i = 0; i < ages.length; i++){
        ageSum += ages[i];
      }
      console.log(ageSum);
    */

    // With reduce (ES6)
    /*
      const ageSum = ages.reduce( ( acc, curr ) => acc + curr, 0 );
      console.log(ageSum);
    */


  //**************************/
  //******** combined ********/
  //**************************/

    // Combining these functions (ES6)
    
      const combined = ages
        .map(age=>age*2) // Ages * 2
        .filter(age=>age>=40) // That are over 40
        .sort((a, b)=>a-b) // Sorted lowest to highest
        .reduce((total, current)=>total+current,0); // Then sum

      console.log(combined);