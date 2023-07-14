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

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-content-center">
            <sponsors-card 
            v-for="i in 5"
                class="mx-auto w-full"
                :title="'Test'"
                :description="'Test here, its going to be cool one day'"
                :logo_url="'https://images.unsplash.com/photo-1545231027-637d2f6210f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80'"
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