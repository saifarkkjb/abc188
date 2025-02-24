function convert() {
    // ดึงค่าจากอินพุตและแปลงเป็นตัวเลข
    var input = parseFloat(document.getElementById('inputValue').value);
    var type = document.getElementById('conversionType').value;
    var result = 0;
  
    // ตรวจสอบว่าค่าอินพุตเป็นตัวเลขหรือไม่
    if (isNaN(input)) {
      document.getElementById('result').innerText = 'กรุณากรอกค่าที่ถูกต้อง';
      return;
    }
  
    // คำนวณผลลัพธ์ตามประเภทการแปลง
    if (type === 'cToF') {
      result = (input * 9/5) + 32;
    } else if (type === 'fToC') {
      result = (input - 32) * 5/9;
    } else if (type === 'kmToMile') {
      result = input * 0.621371;
    } else if (type === 'mileToKm') {
      result = input / 0.621371;
    }
  
    // แสดงผลลัพธ์ (ปรับให้มีทศนิยม 2 ตำแหน่ง)
    document.getElementById('result').innerText = 'ผลลัพธ์: ' + result.toFixed(2);
  }
