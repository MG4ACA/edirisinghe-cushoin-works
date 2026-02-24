<template>
  <div>
    <!-- ── Page Hero ── -->
    <section class="ecw-page-hero">
      <div class="container px-4 mx-auto text-center">
        <p class="ecw-label mb-3">Let's Create Together</p>
        <h1 class="ecw-title-lg mb-3">
          Book an
          <span class="ecw-gold-text">Appointment</span>
        </h1>
        <div class="ecw-gold-divider ecw-gold-divider-center mb-4"></div>
        <p style="color: var(--ecw-text-secondary); max-width: 500px; margin: 0 auto">
          Begin your transformation journey with a complimentary consultation with our expert design
          team.
        </p>
      </div>
    </section>

    <!-- ── Main Content ── -->
    <section class="ecw-section">
      <div class="container px-4 mx-auto">
        <div class="grid">
          <!-- ── LEFT: Google Form CTA + Info ── -->
          <div class="col-12 lg:col-5 mb-5 lg:mb-0">
            <!-- Primary Book Button -->
            <div class="ecw-booking-card mb-5">
              <div class="flex align-items-center gap-3 mb-4">
                <div class="ecw-booking-icon">
                  <i class="pi pi-calendar"></i>
                </div>
                <div>
                  <p class="ecw-label" style="font-size: 0.62rem">Quick Booking</p>
                  <h3 class="ecw-title-md">Book via Google Form</h3>
                </div>
              </div>
              <p
                style="
                  color: var(--ecw-text-secondary);
                  font-size: 0.9rem;
                  line-height: 1.8;
                  margin-bottom: 1.5rem;
                "
              >
                Use our express appointment form for the fastest response. Our team will confirm
                your slot within 24 hours.
              </p>
              <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer">
                <Button
                  label="Open Appointment Form"
                  icon="pi pi-external-link"
                  iconPos="right"
                  class="ecw-btn-gold w-full"
                />
              </a>
            </div>

            <!-- Contact Details -->
            <div class="flex flex-column gap-3">
              <div v-for="info in contactInfo" :key="info.label" class="ecw-info-row">
                <div class="ecw-info-icon">
                  <i :class="`pi ${info.icon}`"></i>
                </div>
                <div>
                  <p class="ecw-label" style="font-size: 0.58rem; margin-bottom: 0.15rem">
                    {{ info.label }}
                  </p>
                  <p style="color: var(--ecw-text-primary); font-size: 0.9rem">{{ info.value }}</p>
                </div>
              </div>
            </div>

            <!-- Hours -->
            <div
              class="mt-5 p-3"
              style="
                border: 1px solid var(--ecw-charcoal-border);
                border-radius: var(--ecw-radius-md);
              "
            >
              <p class="ecw-label mb-3" style="font-size: 0.6rem">Business Hours</p>
              <div class="flex flex-column gap-2">
                <div class="flex justify-content-between">
                  <span style="color: var(--ecw-text-secondary); font-size: 0.85rem">
                    Monday – Friday
                  </span>
                  <span style="color: var(--ecw-text-primary); font-size: 0.85rem">
                    8:00 AM – 6:00 PM
                  </span>
                </div>
                <div class="flex justify-content-between">
                  <span style="color: var(--ecw-text-secondary); font-size: 0.85rem">Saturday</span>
                  <span style="color: var(--ecw-text-primary); font-size: 0.85rem">
                    9:00 AM – 4:00 PM
                  </span>
                </div>
                <div class="flex justify-content-between">
                  <span style="color: var(--ecw-text-secondary); font-size: 0.85rem">Sunday</span>
                  <span class="ecw-text-muted" style="font-size: 0.85rem">By Appointment Only</span>
                </div>
              </div>
            </div>
          </div>

          <!-- ── RIGHT: General Inquiry Form ── -->
          <div class="col-12 lg:col-6 lg:col-offset-1">
            <div class="ecw-inquiry-panel">
              <h2 class="ecw-title-md mb-1">General Inquiry</h2>
              <p style="color: var(--ecw-text-muted); font-size: 0.85rem; margin-bottom: 2rem">
                Not ready to book? Send us an inquiry and we'll get back to you.
              </p>

              <form @submit.prevent="submitForm" class="flex flex-column gap-4">
                <!-- Name row -->
                <div class="grid">
                  <div class="col-12 sm:col-6 ecw-input">
                    <FloatLabel>
                      <InputText
                        id="firstName"
                        v-model="form.firstName"
                        class="w-full"
                        placeholder=" "
                        required
                      />
                      <label for="firstName">First Name</label>
                    </FloatLabel>
                  </div>
                  <div class="col-12 sm:col-6 ecw-input">
                    <FloatLabel>
                      <InputText
                        id="lastName"
                        v-model="form.lastName"
                        class="w-full"
                        placeholder=" "
                        required
                      />
                      <label for="lastName">Last Name</label>
                    </FloatLabel>
                  </div>
                </div>

                <!-- Email -->
                <div class="ecw-input">
                  <FloatLabel>
                    <InputText
                      id="email"
                      v-model="form.email"
                      type="email"
                      class="w-full"
                      placeholder=" "
                      required
                    />
                    <label for="email">Email Address</label>
                  </FloatLabel>
                </div>

                <!-- Phone -->
                <div class="ecw-input">
                  <FloatLabel>
                    <InputText
                      id="phone"
                      v-model="form.phone"
                      type="tel"
                      class="w-full"
                      placeholder=" "
                    />
                    <label for="phone">Phone Number</label>
                  </FloatLabel>
                </div>

                <!-- Vehicle -->
                <div class="ecw-input">
                  <FloatLabel>
                    <InputText id="vehicle" v-model="form.vehicle" class="w-full" placeholder=" " />
                    <label for="vehicle">Vehicle (e.g. Toyota KDH 2023)</label>
                  </FloatLabel>
                </div>

                <!-- Service Interest -->
                <div>
                  <p class="ecw-label mb-3" style="font-size: 0.62rem">Service Interest</p>
                  <div class="flex flex-wrap gap-2">
                    <button
                      v-for="svc in serviceOptions"
                      :key="svc"
                      type="button"
                      class="ecw-filter-btn"
                      :class="{ active: form.serviceInterest === svc }"
                      @click="form.serviceInterest = svc"
                      style="font-size: 0.68rem; padding: 0.45rem 0.9rem"
                    >
                      {{ svc }}
                    </button>
                  </div>
                </div>

                <!-- Message -->
                <div class="ecw-input">
                  <FloatLabel>
                    <Textarea
                      id="message"
                      v-model="form.message"
                      rows="4"
                      class="w-full"
                      placeholder=" "
                      style="resize: none"
                    />
                    <label for="message">Your Message</label>
                  </FloatLabel>
                </div>

                <!-- Submit -->
                <Button
                  type="submit"
                  :label="submitted ? 'Message Sent!' : 'Send Inquiry'"
                  :icon="submitted ? 'pi pi-check' : 'pi pi-send'"
                  iconPos="right"
                  class="ecw-btn-gold"
                  :disabled="submitted"
                />

                <p style="color: var(--ecw-text-muted); font-size: 0.75rem; text-align: center">
                  We respect your privacy. Your information is never shared.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Map Placeholder ── -->
    <section style="padding: 0 0 5rem">
      <div class="container px-4 mx-auto">
        <div class="ecw-map-placeholder">
          <i class="pi pi-map-marker ecw-text-gold" style="font-size: 2.5rem"></i>
          <p class="ecw-label mt-3" style="font-size: 0.62rem">Our Workshop</p>
          <p style="color: var(--ecw-text-secondary); font-size: 0.9rem; margin-top: 0.5rem">
            Colombo, Sri Lanka — Visit us for an in-person consultation
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useToast } from 'primevue/usetoast';
import { reactive, ref } from 'vue';

const toast = useToast();
const submitted = ref(false);

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  vehicle: '',
  serviceInterest: '',
  message: '',
});

const contactInfo = [
  { label: 'Address', icon: 'pi-map-marker', value: 'Colombo, Sri Lanka' },
  { label: 'Phone', icon: 'pi-phone', value: '+94 XX XXX XXXX' },
  { label: 'Email', icon: 'pi-envelope', value: 'info@ecushionworks.lk' },
  { label: 'WhatsApp', icon: 'pi-whatsapp', value: '+94 XX XXX XXXX' },
];

const serviceOptions = [
  'Falkn Series',
  'SRS Seat Covers',
  'Dashboard Wrap',
  'Steering Wheel',
  'KDH Limousine',
  'Full Interior',
];

function submitForm() {
  // In production: POST to your backend or a service like EmailJS / Formspree
  submitted.value = true;
  toast.add({
    severity: 'success',
    summary: 'Inquiry Received',
    detail: `Thank you, ${form.firstName}! Our team will be in touch within 24 hours.`,
    life: 5000,
  });
}
</script>

<style scoped>
.ecw-page-hero {
  padding: 3rem 0 4rem;
  background:
    radial-gradient(ellipse 70% 50% at 50% 50%, rgba(201, 168, 76, 0.05) 0%, transparent 70%),
    var(--ecw-charcoal-mid);
  border-bottom: 1px solid var(--ecw-charcoal-border);
}

/* Booking card */
.ecw-booking-card {
  background: rgba(201, 168, 76, 0.04);
  border: 1px solid rgba(201, 168, 76, 0.2);
  border-radius: var(--ecw-radius-lg);
  padding: 1.75rem;
}

.ecw-booking-icon {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(201, 168, 76, 0.1);
  border: 1px solid rgba(201, 168, 76, 0.3);
  border-radius: var(--ecw-radius-md);
  font-size: 1.2rem;
  color: var(--ecw-gold);
}

/* Info rows */
.ecw-info-row {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid var(--ecw-charcoal-border);
  border-radius: var(--ecw-radius-md);
  background: var(--ecw-charcoal-mid);
  transition: border-color 0.2s;
}
.ecw-info-row:hover {
  border-color: rgba(201, 168, 76, 0.25);
}

.ecw-info-icon {
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--ecw-gold);
  font-size: 1rem;
}

/* Inquiry panel */
.ecw-inquiry-panel {
  background: var(--ecw-charcoal-mid);
  border: 1px solid var(--ecw-charcoal-border);
  border-radius: var(--ecw-radius-lg);
  padding: 2.5rem;
}

/* Map placeholder */
.ecw-map-placeholder {
  height: 200px;
  background:
    linear-gradient(135deg, rgba(201, 168, 76, 0.03) 0%, transparent 60%), var(--ecw-charcoal-mid);
  border: 1px solid var(--ecw-charcoal-border);
  border-radius: var(--ecw-radius-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>
