import { useState } from 'react';

export default function TechnologySection() {
  const [activePoint, setActivePoint] = useState(0);

  const technologies = [
    {
      id: 1,
      title: "การเลือกเซลล์",
      icon: "https://www.gushine.com/jp/uploads/image/20241008/08b33c49f926d17b6ebfaaed02c66e42.png",
      features: [
        "การเลือกเซลล์จากผู้ผลิตเซลล์ และข้อกำหนดแบตเตอรี่ (ขนาด/ความจุ/แรงดัน)",
        "ความหนาแน่นของพลังงานสูง สามารถใช้งานได้ในระยะยาว",
        "อายุการใช้งานแบบวงจรยาว",
        "ความปลอดภัยสูง",
        "การจับคู่เซลล์ที่มีแรงดันใกล้เคียงกัน",
        "คุณสมบัติกันระเบิด การปล่อยประจุอัตราสูง การออกแบบพลังงาน"
      ]
    },
    {
      id: 2,
      title: "การออกแบบโครงสร้าง",
      icon: "https://www.gushine.com/jp/uploads/image/20241008/0b49e278696357760ee7e2bd77db6e8f.png",
      features: [
        "การออกแบบให้เหมาะกับพื้นที่ใช้งานและสภาพแวดล้อม",
        "สอดคล้องกับมาตรฐานความทนไฟ",
        "ความแข็งแรงทางกลของโมดูลแบตเตอรี่สูง ทนต่อการสั่นสะเทือน การกระแทก การเร่ง",
        "การออกแบบกันน้ำกันฝุ่น IP67 / IP68",
        "โครงสร้างกันระเบิดที่ปลอดภัยโดยธรรมชาติ (ia・ib) การออกแบบกันระเบิด ATEX, IECEx, MA, IS"
      ]
    },
    {
      id: 3,
      title: "ระบบจัดการแบตเตอรี่ (BMS)",
      icon: "https://www.gushine.com/jp/uploads/image/20241008/506689a1f15aa6d102e07fd27c1c9ea2.png",
      features: [
        "การป้องกันการชาร์จเกิน การปล่อยประจุเกิน การป้องกันกระแสเกิน การป้องกันลัดวงจร และการป้องกันอุณหภูมิ",
        "ฟังก์ชันสมดุลเซลล์ การป้องกันแบตเตอรี่รอง",
        "การตรวจสอบแรงดัน กระแส และอุณหภูมิแบบเรียลไทม์",
        "การตรวจจับข้อผิดพลาด การแจ้งเตือน และการจัดการข้อผิดพลาด",
        "ใช้ Gauge IC ของ TI, MAXIM, RICHTEK, SinoWealth เป็นต้น เพื่อจัดการ SOC, SOH ของแบตเตอรี่",
        "อินเทอร์เฟซการสื่อสารมาตรฐาน (RS232, RS485, I²C, SMBUS, CAN) สำหรับการสื่อสารข้อมูล",
        "Bluetooth, อินเทอร์เน็ตสำหรับการตรวจสอบแบ็กเอนด์ การปล่อยประจุตัวเองต่ำ สามารถเก็บไว้ได้นาน"
      ]
    }
  ];

  return (
    <section id="technology" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            การปรับแต่งโมดูลแบตเตอรี่ลิเธียม
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="lg:flex lg:space-x-16">
          {/* Technology List */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="space-y-6">
              {technologies.map((tech, index) => (
                <div
                  key={tech.id}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    activePoint === index
                      ? 'bg-blue-600 text-white shadow-xl transform scale-105'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setActivePoint(index)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 flex items-center justify-center">
                      <img 
                        src={tech.icon} 
                        alt={tech.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{tech.title}</h3>
                    </div>
                  </div>
                  
                  {/* Expanded Content */}
                  {activePoint === index && (
                    <div className="mt-6 pl-20">
                      <ul className="space-y-3">
                        {tech.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3">
                            <i className="ri-check-line text-green-300 mt-1 flex-shrink-0"></i>
                            <span className="text-sm leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
              >
                เรียนรู้เพิ่มเติม
                <i className="ri-arrow-right-line ml-2"></i>
              </a>
            </div>
          </div>

          {/* Technology Visualization */}
          <div className="lg:w-1/2">
            <div className="relative">
              <img
                src="https://www.gushine.com/jp/uploads/image/20250122/2608648d6546e3df10f824e701359016.webp"
                alt="Battery Technology"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Interactive Points */}
              <div className="absolute inset-0">
                {/* Point 1 */}
                <div 
                  className={`absolute top-1/4 left-1/4 w-6 h-6 rounded-full cursor-pointer transition-all duration-300 ${
                    activePoint === 0 ? 'bg-blue-600 scale-150' : 'bg-white border-2 border-blue-600'
                  }`}
                  onClick={() => setActivePoint(0)}
                >
                  <div className="absolute inset-0 rounded-full animate-ping bg-blue-600 opacity-30"></div>
                </div>
                
                {/* Point 2 */}
                <div 
                  className={`absolute top-1/2 right-1/3 w-6 h-6 rounded-full cursor-pointer transition-all duration-300 ${
                    activePoint === 1 ? 'bg-blue-600 scale-150' : 'bg-white border-2 border-blue-600'
                  }`}
                  onClick={() => setActivePoint(1)}
                >
                  <div className="absolute inset-0 rounded-full animate-ping bg-blue-600 opacity-30"></div>
                </div>
                
                {/* Point 3 */}
                <div 
                  className={`absolute bottom-1/4 left-1/2 w-6 h-6 rounded-full cursor-pointer transition-all duration-300 ${
                    activePoint === 2 ? 'bg-blue-600 scale-150' : 'bg-white border-2 border-blue-600'
                  }`}
                  onClick={() => setActivePoint(2)}
                >
                  <div className="absolute inset-0 rounded-full animate-ping bg-blue-600 opacity-30"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}