// Değişken Tanımlama
let isim: string = "Ali";
let yas: number = 30;

// Tip Çıkarımı
let sehir = "İstanbul"; // sehir: string

// Birleşim Tipleri (Union Types)
let deger: string | number;
deger = "Merhaba"; // string olarak atanabilir
 
deger = 100; // number olarak atanabilir

// Diziler
let sayilar: number[] = [1, 2, 3, 4, 5];
let isimler: string[] = ["Ali", "Ayşe", "Fatma"];

// Tuple'lar
let kullanici: [string, number] = ["Ahmet", 25]; // [isim, yaş]

// Enum'lar
enum Renk { Kırmızı, Yeşil, Mavi };
let favoriRenk: Renk = Renk.Mavi;

console.log(`İsim: ${isim}, Yaş: ${yas}, Şehir: ${sehir}, Favori Renk: ${favoriRenk}`);