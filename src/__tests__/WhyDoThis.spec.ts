import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest'
import WhyDoThis from '@/views/WhyDoThis.vue';

describe('WhyDoThis', () => {
  it('should scroll to the top of the page on mount', () => {
    // Create a fake scrollTo function
    const fakeScrollTo = jest.fn();
    window.scrollTo = fakeScrollTo;

    // Mount the component
    const wrapper = mount(WhyDoThis);

    // Assert that the scrollTo function was called with the correct arguments
    expect(fakeScrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });

  it('should have the correct page title and description', () => {
    // Create a mock siteData object with fake title and description
    const siteData = {
      title: 'Free UK Sponsorship Opportunities: Learn Why UKSponsored Offers Free Services',
      description: "Discover the reasons behind UKSponsored's commitment to providing free sponsorship opportunity services in the UK. Learn how our platform connects job seekers with sponsorships from top companies without any charges, empowering career growth for all.",
    };

    // Use jest.spyOn to mock the reactive function
    const reactiveMock = jest.spyOn(WhyDoThis, 'reactive').mockReturnValue(siteData);

    // Mount the component
    const wrapper = mount(WhyDoThis);

    // Assert that the page title and description are set correctly
    expect(document.title).toBe(siteData.title);

    const metaTags = document.getElementsByTagName('meta');
    let description = '';
    for (let i = 0; i < metaTags.length; i++) {
      const metaTag = metaTags[i];
      if (metaTag.getAttribute('name') === 'description') {
        description = metaTag.getAttribute('content') || '';
        break;
      }
    }
    expect(description).toBe(siteData.description);

    // Restore the original reactive function
    reactiveMock.mockRestore();
  });
});