<template>

    <!-- Begin Mailchimp Signup Form -->
    <div id="mc_embed_signup" class="w-full">
        <form action="https://happymamafinds.us21.list-manage.com/subscribe/post?u=5f619e59a73a7d9263fc07679&amp;id=c733a57071&amp;f_id=003658e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate w-full" target="_self">
            <div class="mb-5" v-if="props.newsletterHeader">
                <h2 class="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">Sign up for our Newsletter</h2>
            </div>

            <div id="mc_embed_signup_scroll" class="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
            
                <div class="mc-field-group w-full">
                    <input placeholder="Enter your email" type="email" value="" name="EMAIL" class="required email py-3 px-4 block w-full border border-gray-200 shadow-sm rounded-md focus:z-10 focus:border-dark focus:ring-dark" id="mce-EMAIL" required>
                    <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
                </div>
                <div id="mce-responses" class="clear foot">
                    <div class="response" id="mce-error-response" style="display:none"></div>
                    <div class="response" id="mce-success-response" style="display:none"></div>
                </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_5f619e59a73a7d9263fc07679_c733a57071" tabindex="-1" value=""></div>
                <div class="optionalParent">
                    <div class="clear foot">
                        <input class="w-full sm:w-auto whitespace-nowrap inline-flex justify-center items-center gap-x-3 text-center bg-primary hover:bg-primary/50 border border-transparent cursor-pointer text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800 button" type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe">
                    </div>
                </div>
            </div>
        </form>
    </div>

<!--End mc_embed_signup-->
</template>

<script lang="ts" setup>

const props = defineProps({
    newsletterHeader: Boolean,
})

</script>