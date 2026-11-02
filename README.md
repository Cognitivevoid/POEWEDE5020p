# Takealot Informational Website

## Changes I Made

### 2 November 2026 — Assessment feedback: functionality, SEO and forms

- I added keyboard-accessible, expandable FAQ sections to the home and services pages using native disclosure controls.
- I dynamically render three home-page service highlights from local JavaScript data, linking to the matching sections on the Services page.
- I added a searchable services list that filters the existing service descriptions as the visitor types and announces the number of matches to assistive technology.
- I made the About page images open in an accessible, dismissible lightbox, with a descriptive caption and keyboard support through the native dialog element.
- I embedded a responsive, lazy-loaded map for the Cape Town head-office address shown on the Contact page.
- I added a distinct search description and browser theme colour to each page, and rewrote page titles to describe their content more clearly.
- I added links to Takealot's Instagram, TikTok, X and Facebook profiles in every page footer so visitors can find the organisation's social channels. These are outbound links; inbound backlinks require adding the live website URL to the social profiles themselves.
- I added a basic `robots.txt` that permits search-engine crawlers to access the public site.
- I added canonical and social-sharing metadata to each page and prepared `sitemap.xml` and Netlify settings for the requested `takealot-website-litha.netlify.app` address. Netlify must issue that site name before those public URLs resolve.
- I expanded the enquiry form so visitors can identify product, delivery, marketplace, volunteering and sponsorship enquiries. Both forms now use required fields, length and format constraints, and browser validation.
- I added client-side form handling that compiles validated details into an email draft addressed to the recipient configured in the form. The visitor reviews and sends the draft from their email application; this static site does not store or transmit form data to a server.
- I corrected the contact and enquiry navigation links to match the capitalisation of the corresponding filenames, avoiding broken links on case-sensitive web hosts.
- I added responsive styling for search, FAQs, the map and image preview, and kept the existing reduced-motion preference in effect.
- I configured Netlify to publish the static folder and set security response headers for content sniffing, referrers, framing and browser permissions.
- Before publishing, verify that `support@takealot.com` is the correct form recipient and replace it in both form `action` and `data-recipient` values if required. The canonical URLs, `robots.txt` and sitemap are set to `takealot-website-litha.netlify.app`; Netlify must issue that site name before those public URLs resolve. If the name is unavailable, update the domain consistently in the page canonical/Open Graph URLs, `robots.txt` and `sitemap.xml`.

17 September 2026 — CSS styling and responsive design

- I reworked the shared `style.css` stylesheet used by every page.
  added a browser-consistent reset, colour variables, scalable typography, spacing, accessible focus states, and interactive hover styles.
  added responsive tablet and mobile breakpoints, so the navigation, page layout, forms, and service sections adapt to smaller screens using relative units and CSS Grid/Flexbox.
  added responsive local hero artwork with the `picture`, `srcset`, and `sizes` attributes, so a compact illustration is delivered to mobile screens.
  styled page content, service cards, forms, buttons, header, and footer into a consistent desktop design.
  added current-page navigation states, repaired malformed service-page markup, and made contact fields required.
  added a smooth shared navigation bubble that glides between links on hover, focus, and pointer exit.
  added accessible decorative icons to navigation, key actions, service cards, and contact details.
  made the Takealot brand in the header a clickable shortcut back to the home page.
  increased the navigation icon size for clearer visual hierarchy.
  increased the blue Takealot home shortcut on the left while preserving a compact mobile layout.

### 18 September 2026 — Takealot imagery and device compatibility

- I added official Takealot Group imagery to the About page, including a fulfilment-warehouse image for the company story and a team image for the people section.
- I added a branded Takealot app visual to the Services page to support the online-shopping and delivery content.
- I stored the new visual files locally in the `assets` folder and used descriptive alternative text for each image.
- I made the site scale comfortably across laptops, tablets, phones, and narrow phones without requiring a separate mobile site.
- I added layout adjustments at approximately 1120px, 832px, 544px, and 368px wide.
  made the navigation wrap on smaller laptops, stack neatly on tablets, use two touch-friendly columns on phones, and switch to one column on very narrow screens.
  reduced the mobile logo size, used fluid navigation and heading sizes, and gave navigation links a comfortable minimum touch height
  changed the hero, images, service overview, cards, forms, and page spacing to reflow cleanly on smaller screens.
  added horizontal-overflow protection and responsive image cropping so visual content stays within the screen.
  updated the stylesheet cache version on every page so browsers load the newest CSS changes.

## File Structure

```text
.
├── index.html
├── About.html
├── services.html
├── Enquiry.html
├── Contact.html
├── style.css
├── script.js
├── README.md
├── robots.txt
├── sitemap.xml
├── netlify.toml
└── assets/
    ├── online-shopping-desktop.svg
    ├── online-shopping-mobile.svg
    ├── takealot-app.webp
    ├── takealot-story.jpg
    └── takealot-story-3.jpg
```

## Testing

I check the pages at desktop, tablet, and mobile widths. I confirm that navigation wraps cleanly, forms remain usable, images and cards stay within the viewport, and no horizontal scrolling appears. I also verify that local image references resolve correctly and that every page uses the current shared stylesheet.
