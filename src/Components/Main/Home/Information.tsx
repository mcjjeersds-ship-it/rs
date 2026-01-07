import SectionWrapper from '../SectionWrapper';

const Information = () => {
  return (
    <SectionWrapper id="information">
      <div className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1d4d85] mb-4">Hospital Information</h2>
          <div className="w-32 h-1 bg-[#2b7dad] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-[#84ceff]">
            <h3 className="text-xl font-bold text-[#1d4d85] mb-3">Hospital Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between border-b pb-2">
                <span>Monday - Friday:</span>
                <span>8:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span>Saturday:</span>
                <span>9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>Emergency Only</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg border border-[#84ceff]">
            <h3 className="text-xl font-bold text-[#1d4d85] mb-3">Emergency Services</h3>
            <p className="mb-3">24/7 emergency care available for critical situations.</p>
            <p className="font-bold text-[#2b7dad]">Emergency Number: +1 (505) 555-0125</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg border border-[#84ceff]">
            <h3 className="text-xl font-bold text-[#1d4d85] mb-3">Contact Information</h3>
            <p className="mb-2"><span className="font-bold">Address:</span> 4517 Washington Ave, Manchester, Kentucky 39495</p>
            <p className="mb-2"><span className="font-bold">Phone:</span> +1 (505) 555-0125</p>
            <p><span className="font-bold">Email:</span> info@hospital.com</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg border border-[#84ceff]">
            <h3 className="text-xl font-bold text-[#1d4d85] mb-3">Patient Resources</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Admission Process</li>
              <li>Visiting Hours</li>
              <li>Payment Options</li>
              <li>Insurance Information</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg border border-[#84ceff]">
            <h3 className="text-xl font-bold text-[#1d4d85] mb-3">Facilities</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Emergency Room</li>
              <li>ICU & CCU</li>
              <li>Operation Theatres</li>
              <li>Diagnostic Center</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg border border-[#84ceff]">
            <h3 className="text-xl font-bold text-[#1d4d85] mb-3">Health Services</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Primary Care</li>
              <li>Specialist Consultations</li>
              <li>Diagnostic Services</li>
              <li>Pharmacy Services</li>
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Information;