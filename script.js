document.addEventListener("DOMContentLoaded", () => {
    const highlightsContainer = document.querySelector("#home-highlights");
    if (highlightsContainer) {
        const highlights = [
            {
                title: "TakealotNOW",
                description: "Find selected everyday products for rapid delivery in supported areas.",
                href: "services.html#takealot-now"
            },
            {
                title: "Delivery network",
                description: "Explore home delivery, collection points and fulfilment services.",
                href: "services.html#delivery-network"
            },
            {
                title: "Marketplace",
                description: "Learn how sellers and entrepreneurs reach online shoppers.",
                href: "services.html#marketplace"
            }
        ];

        highlightsContainer.replaceChildren(...highlights.map(({ title, description, href }) => {
            const card = document.createElement("article");
            card.className = "highlight-card";
            const heading = document.createElement("h3");
            const link = document.createElement("a");
            link.href = href;
            link.textContent = title;
            heading.append(link);
            const summary = document.createElement("p");
            summary.textContent = description;
            card.append(heading, summary);
            return card;
        }));
    }

    document.querySelectorAll("nav ul").forEach((menu) => {
        const links = [...menu.querySelectorAll("a")];
        const currentLink = menu.querySelector("a[aria-current='page']") || links[0];

        if (!currentLink) return;

        const bubble = document.createElement("span");
        bubble.className = "nav-bubble";
        bubble.setAttribute("aria-hidden", "true");
        menu.prepend(bubble);
        menu.classList.add("nav-enhanced");

        const moveBubble = (link) => {
            const menuBox = menu.getBoundingClientRect();
            const linkBox = link.getBoundingClientRect();
            bubble.style.width = `${linkBox.width}px`;
            bubble.style.height = `${linkBox.height}px`;
            bubble.style.setProperty("--bubble-x", `${linkBox.left - menuBox.left}px`);
            bubble.style.setProperty("--bubble-y", `${linkBox.top - menuBox.top}px`);
            bubble.classList.add("is-moving");
        };

        links.forEach((link) => {
            link.addEventListener("pointerenter", () => moveBubble(link));
            link.addEventListener("focus", () => moveBubble(link));
        });

        menu.addEventListener("pointerleave", () => moveBubble(currentLink));
        window.addEventListener("resize", () => moveBubble(currentLink));
        moveBubble(currentLink);
    });

    const serviceSearch = document.querySelector("#service-search");
    if (serviceSearch) {
        const services = [...document.querySelectorAll(".service")];
        const status = document.querySelector("#service-search-status");

        serviceSearch.addEventListener("input", () => {
            const query = serviceSearch.value.trim().toLocaleLowerCase();
            const visibleCount = services.reduce((count, service) => {
                const matches = service.textContent.toLocaleLowerCase().includes(query);
                service.hidden = !matches;
                return count + Number(matches);
            }, 0);

            status.textContent = visibleCount === 0
                ? "No services match your search."
                : `Showing ${visibleCount} of ${services.length} services.`;
        });
    }

    const imageDialog = document.querySelector("#image-lightbox");
    if (imageDialog) {
        const preview = imageDialog.querySelector("img");
        const caption = imageDialog.querySelector(".lightbox-caption");

        document.querySelectorAll(".lightbox-trigger").forEach((trigger) => {
            trigger.addEventListener("click", () => {
                const source = trigger.querySelector("img");
                preview.src = source.currentSrc || source.src;
                preview.alt = source.alt;
                caption.textContent = trigger.closest("figure").querySelector("figcaption").textContent;
                imageDialog.showModal();
            });
        });

        imageDialog.querySelector(".lightbox-close").addEventListener("click", () => imageDialog.close());
        imageDialog.addEventListener("cancel", () => imageDialog.close());
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && imageDialog.open) imageDialog.close();
        });
        imageDialog.addEventListener("click", (event) => {
            if (event.target === imageDialog) imageDialog.close();
        });
        imageDialog.addEventListener("close", () => {
            preview.removeAttribute("src");
            preview.alt = "";
        });
    }

    document.querySelectorAll(".contact-form, .enquiry-form").forEach((form) => {
        const phone = form.querySelector('input[type="tel"]');
        if (phone) {
            phone.addEventListener("input", () => {
                const digits = phone.value.replace(/\D/g, "").length;
                phone.setCustomValidity(phone.value && (digits < 7 || digits > 15)
                    ? "Enter a phone number with 7 to 15 digits."
                    : "");
            });
        }

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            if (!form.reportValidity()) return;

            const recipient = form.dataset.recipient;
            const status = form.querySelector(".form-status");
            if (!recipient || !status) {
                throw new Error("The form is missing its email recipient or status message.");
            }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(recipient)) {
                throw new Error("The form email recipient is not a valid email address.");
            }

            const data = new FormData(form);
            const subject = form.classList.contains("enquiry-form")
                ? `Takealot enquiry: ${data.get("enquiryType")}`
                : `Takealot contact: ${data.get("messageType")}`;
            const message = [...data.entries()]
                .map(([key, value]) => `${key}: ${value}`)
                .join("\n");
            const emailLink = document.createElement("a");
            emailLink.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
            emailLink.textContent = "Open your email draft";

            status.replaceChildren(
                document.createTextNode("Your message has been validated. Open your email app to review and send it: "),
                emailLink,
                document.createTextNode(".")
            );
        });
    });
});
