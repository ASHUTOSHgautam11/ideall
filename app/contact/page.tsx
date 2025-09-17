import ContactBanner from '@/components/ContactBanner';
import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';
import CoreValues from '@/components/CoreValues';
import WhyPartner from '@/components/WhyPartner';

export default function Contact() {
  return (
    <main>
      
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Connect With Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to discuss your procurement needs? Our team is here to help you navigate global markets 
              and source premium interior solutions.
            </p>
          </div>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
            
            <ContactForm />
            <ContactInfo />
          </div>
          <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-secondary">Partnership Opportunities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We work with various types of partners across the interior design and construction value chain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Trade Partners */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Trade Partners</h3>
              <p className="text-gray-600 mb-6">Established exporters and distributors seeking reliable sourcing partners.</p>

              <div className="space-y-3 mb-6">
                <h4 className="font-medium text-gray-800">Networking Benefits</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-secondary">
                  <li>Access to exclusive product catalogs</li>
                  <li>Competitive pricing and volume discounts</li>
                  <li>Support for logistics and export compliance</li>
                  <li>Dedicated account management</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-800">Requirements</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2 marker:text-secondary">
                  <li>Valid business registration</li>
                  <li>Proven track record in exporting</li>
                  <li>Minimum order quantity (MOQ) capacity</li>
                  <li>Compliance with international standards</li>
                </ul>
              </div>
            </div>

            {/* Design Professionals */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Design Professionals</h3>
              <p className="text-gray-600 mb-6">Interior designers, architects, and design firms requiring premium materials.</p>

              <div className="space-y-3 mb-6">
                <h4 className="font-medium text-gray-800">Networking Benefits</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-secondary">
                  <li>Exclusive product recommendations</li>
                  <li>Project-specific sourcing capabilities</li>
                  <li>Priority access to new collections</li>
                  <li>Dedicated technical and design support</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-800">Requirements</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2 marker:text-secondary">
                  <li>Active practice with client portfolio</li>
                  <li>Professional certification or licensure</li>
                  <li>Interest in sustainable and innovative materials</li>
                </ul>
              </div>
            </div>

            {/* Retail Partners */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Retail Partners</h3>
              <p className="text-gray-600 mb-6">Premium retailers and showrooms seeking unique product offerings.</p>

              <div className="space-y-3 mb-6">
                <h4 className="font-medium text-gray-800">Networking Benefits</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-secondary">
                  <li>Exclusive brand collaborations</li>
                  <li>Marketing and sales support</li>
                  <li>Co-branded promotional campaigns</li>
                  <li>Monthly product updates and training</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-800">Requirements</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2 marker:text-secondary">
                  <li>Minimum retail space requirement</li>
                  <li>Strong visual merchandising capability</li>
                  <li>Brand alignment with quality and aesthetics</li>
                </ul>
              </div>
            </div>

            {/* Project Developers */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Developers</h3>
              <p className="text-gray-600 mb-6">Large-scale residential and commercial development projects.</p>

              <div className="space-y-3 mb-6">
                <h4 className="font-medium text-gray-800">Networking Benefits</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-secondary">
                  <li>Customized material solutions</li>
                  <li>Project-based bulk pricing and delivery</li>
                  <li>Dedicated project management teams</li>
                  <li>On-site coordination and installation support</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-800">Requirements</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2 marker:text-secondary">
                  <li>Registered construction or development firm</li>
                  <li>Architectural plans and specifications</li>
                  <li>Project timeline and budget documentation</li>
                  <li>Ability to manage large-scale deliveries</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyPartner/>
      <ContactBanner/> 
      <CoreValues/>

          
        </div>
      </section>
    </main>
  );
}

// import ContactForm from '@/components/ContactForm';
// import ContactInfo from '@/components/ContactInfo';

// export default function Contact() {
//   return (
//     <main>
//       {/* Hero Section */}
//       <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
//               Connect With Us
//             </h1>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Ready to discuss your procurement needs? Our team is here to help you navigate global markets
//               and source premium interior solutions.
//             </p>
//           </div>


//         </div>
//       </section>

//       {/* Partnership Opportunities Section */}
      
      
//     </main>
//   );
// }