<template>
    <Head>
        <Title> Sponsors </Title>
        <Meta name="description" content="A dedicated page of thanks for our wonderful sponsors" />
    </Head>

    <nav-bar></nav-bar>

    <div class="max-w-[85rem] px-4 sm:px-6 lg:px-8 lg:py-14 mx-auto">

        <div class="hidden md:block aspect-w-16 aspect-h-7 relative mb-8">

            <div class="flex flex-col justify-center p-6 absolute top-0 h-full w-full bg-dark/75 text-white rounded-xl">
                <h1 class="font-bold text-6xl mb-2 text-white">Thank you to our sponsors</h1>
                <p class="text-white lg:w-3/4">We are incredibly grateful to our supporting partners for their vital role in making our events possible. Your generous contributions have a profound impact on local mothers and their families, fostering connections, empowerment, and positive change within our community. Thank you for joining us on this journey of making a difference.</p>
            </div>
            
            <img class="w-full object-cover rounded-xl max-h-[300px]" src="https://images.unsplash.com/photo-1522543558187-768b6df7c25c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Image Description">
        </div>

        <h2 class="block text-3xl font-bold sm:text-4xl lg:text-6xl lg:leading-tight text-primary">Our Sponsors</h2>
        <p class="mt-4 text-dark mb-6">Show support to the ones that support our vision!</p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-content-center mb-6">

            <sponsors-card 
                class="mx-auto w-full"
                title='Undercover Angels of Saginaw'
                description='Animal lovers committed to staying dedicated to reducing the number of unwanted, homeless, neglected and abused animals in our area.'
                logo_url="../../assets/img/sponsors/UnderCover_angels.jpg"
                business_url="https://www.facebook.com/groups/963849070346935"
                >
            </sponsors-card>

            <sponsors-card 
                class="mx-auto w-full"
                title='Almighty Treecare'
                description='Almighty Tree Care: Harnessing expertise and precision to sculpt and maintain the natural beauty of your landscape.'
                logo_url="../../assets/img/sponsors/almighty_tree_care.jpg"
                business_url="https://www.facebook.com/almightytree.care"
                >
            </sponsors-card>

            <sponsors-card 
                class="mx-auto w-full"
                title='Sheppard Design Co.'
                description='Embroidered goods for home & wear'
                logo_url="../../assets/img/sponsors/sheppard_design_co.jpg"
                business_url="https://www.facebook.com/shepparddesignco"
                >
            </sponsors-card>

            <sponsors-card 
                class="mx-auto w-full"
                title='J. Pine Construction & Design'
                description='Home Improvements/New construction/Custom Cabinetry, Insured'
                logo_url="../../assets/img/sponsors/pine_construction.jpg"
                business_url="https://www.facebook.com/profile.php?id=100068924807791"
                >
            </sponsors-card>

            <sponsors-card 
                class="mx-auto w-full"
                title='Soul Fit'
                description='A community of individuals bettering themselves physically, mentally, & spiritually'
                logo_url="../../assets/img/sponsors/soul_fit.jpg"
                business_url="https://www.soulfitfam.com/"
                >
            </sponsors-card>

            <sponsors-card 
                class="mx-auto w-full"
                title='Creative Grace Wedding Planning'
                description='Creative Grace Provides planning & coordination services for weddings & intimate events in Mid MI. '
                logo_url="../../assets/img/sponsors/creative_grace_planning.jpg"
                business_url="https://creativegraceplanning.com/"
                >
            </sponsors-card>
        </div>

    </div>

    <div class="bg-white">
        <landing-page-contact-section
            title="Become a Sponsor"
            subtitle="We'd love to partner and make a positive impact!"
        ></landing-page-contact-section>
    </div>
    <landing-page-footer-section></landing-page-footer-section>

</template>