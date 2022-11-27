import fetch from 'node-fetch'
  
fetch('http://hasanadiguzel.com.tr/api/kurgetir')
.then(response => response.json())
.then(data => {let euro = (data.TCMB_AnlikKurBilgileri[3].ForexBuying);
    
    let araba = 10.000 * euro;
    const kdv = araba * 0.18 ;
    const aracFiyati = (matrah) => { 
        let otv = (kdv + araba) * (matrah);
        return otv
    };

console.log("€-KURU  :",euro,"€")
console.log("₺-ARAÇ  :", araba,"₺")  ;
console.log("₺-KDV   :", kdv,"₺")  ;
console.log("₺-ÖTV   :", aracFiyati(0.50),"₺")  ;
console.log("₺-TOTAL :", aracFiyati(1) +aracFiyati(0.50),"₺") ;

});

