import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const contactDetails = [
  {
    icon: MapPin,
    title: 'Our Location',
    details: ['71 Ubi Crescent #06-06','Excalibur Centre','Singapore 408571']

 
  },
  {
    icon: Phone,
    title: 'Phone',
    details: ['+65 1234 5678', 'Mon-Fri 9AM-6PM SGT']
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@ideallsolutions.sg', 'support@ideallsolutions.sg']
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Weekend: By Appointment']
  }
];

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* <div>
        <h2 className="text-2xl font-bold text-primary mb-6">Contact Information</h2>
        <p className="text-gray-600 mb-8">
          We're here to help you with your procurement needs. Reach out to our team for expert guidance and personalized solutions.
        </p>
      </div> */}

      <div className="space-y-6">
        {contactDetails.map((detail, index) => {
          const Icon = detail.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">{detail.title}</h3>
                    {detail.details.map((item, itemIndex) => (
                      <p key={itemIndex} className="text-gray-600 text-sm">{item}</p>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="bg-gradient-to-br from-primary to-primary/90 text-white">
        <CardContent className="p-6">
          <h3 className="font-bold text-lg mb-3">Ready to Get Started?</h3>
          <p className="opacity-90 mb-4">
            Contact our team today to discuss your specific requirements and learn how we can help optimize your procurement process.
          </p>
          <div className="text-sm opacity-80">
            Response time: Within 24 hours
          </div>
        </CardContent>
      </Card>
    </div>
  );
}