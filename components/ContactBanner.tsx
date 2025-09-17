import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ContactBanner() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          Ready to Start Your Global Procurement Journey?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Contact our team today to discuss your procurement needs and discover how we can help you source premium products globally.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg">
            <Link href="/contact">Contact Our Team</Link>
          </Button>
          <Button size="lg" variant="outline" className="bg-secondary border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg">
            <Link href="/product-categories">View Our Categories</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}