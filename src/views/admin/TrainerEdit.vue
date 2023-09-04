<template class="container-fluid">
  <CRow dir="rtl">
    <CCol>
      <CCard class="mb-4">
        <CCardHeader class="h-item">
          <small>افزودن، ویرایش و حذف</small> <strong>مربیان</strong>
        </CCardHeader>
        <CCardBody class="b-item">
          <CAccordion always-open>
            <CAccordionItem :item-key="1">
              <CAccordionHeader> نمایش مربی‌ها </CAccordionHeader>
              <CAccordionBody>
                <CTable>
                  <CTableHead color="secondary">
                    <tr class="cart_menu">
                      <td>تصویر</td>
                      <td>نام مربی</td>
                      <td>نوع دوره</td>
                      <td>رشته</td>
                      <td>حذف مربی</td>
                      <td>ویرایش مربی</td>
                    </tr>
                  </CTableHead>
                  <br />
                  <CTableBody>
                    <tr v-for="item in trainers" :key="item.id">
                      <td class="cart_product">
                        <img :src="item.imge" width="60" height="60" alt="" />
                      </td>
                      <td class="cart_description">
                        <p>
                          {{ item.NameFamily }}
                        </p>
                      </td>
                      <td class="cart_price">
                        <p>{{ item.type }}</p>
                      </td>
                      <td class="cart_quantity">
                        <p>{{ item.field }}</p>
                      </td>
                      <td style="color: #fff">
                        <CButton style="background-color: rgb(208, 64, 64)"
                          >حذف</CButton
                        >
                      </td>
                      <td style="color: #fff">
                        <CButton style="background-color: rgb(38, 220, 47)"
                          >ویرایش</CButton
                        >
                      </td>
                    </tr>
                  </CTableBody>
                </CTable>
              </CAccordionBody>
            </CAccordionItem>
            <CAccordionItem :item-key="2">
              <CAccordionHeader> افزودن مربی جدید </CAccordionHeader>
              <CAccordionBody>
                <div class="a-form">
                  <CRow class="mb-3">
                    <div class="col-sm-10">
                      <CFormInput
                        class="i-label"
                        type="text"
                        placeholder="نام"
                      />
                    </div>
                  </CRow>
                  <CRow class="mb-3">
                    <div class="col-sm-10">
                      <CFormInput
                        class="i-label"
                        type="text"
                        placeholder="نام خانوادگی"
                      />
                    </div>
                  </CRow>
                  <CRow class="mb-3">
                    <div class="col-sm-10">
                      <CFormInput
                        class="i-label"
                        type="text"
                        placeholder="کد ملی"
                      />
                    </div>
                  </CRow>
                  <CRow class="mb-3">
                    <div class="col-sm-10">
                      <CFormInput
                        class="i-label"
                        type="text"
                        placeholder="تاریخ تولد"
                      />
                    </div>
                  </CRow>
                  <CRow class="mb-3">
                    <div class="col-sm-10">
                      <CFormInput
                        class="i-label"
                        type="text"
                        placeholder="شماره تماس"
                      />
                    </div>
                  </CRow>
                  <CRow class="mb-3">
                    <div class="col-sm-10">
                      <CFormInput
                        class="i-label"
                        type="text"
                        placeholder="رشته تحصیلی"
                      />
                    </div>
                  </CRow>
                  <CRow class="mb-3">
                    <div class="col-sm-10">
                      <CFormInput
                        class="i-label"
                        type="text"
                        placeholder="نوع دوره"
                      />
                    </div>
                  </CRow>
                  <CRow class="mb-3">
                    <div class="col-sm-10">
                      <CFormInput
                        class="i-label"
                        type="text"
                        placeholder="میزان تحصیلات"
                      />
                    </div>
                  </CRow>
                  <CRow class="mb-3">
                    <div class="col-sm-10">
                      <CFormInput
                        class="i-label"
                        type="text"
                        placeholder="آدرس ایمیل"
                      />
                    </div>
                  </CRow>
                  <CRow class="mb-3">
                    <div class="col-sm-10">
                      <CFormInput
                        class="i-label"
                        type="text"
                        placeholder="آدرس محل زندگی"
                      />
                    </div>
                  </CRow>
                </div>
                <div style="padding-right: 9px">
                  <CRow class="mb-3">
                    <div class="mb-3">
                      <CFormLabel for="formFile">انتخاب تصویر</CFormLabel>
                      <CFormInput
                        class="i-label"
                        style="width: 300px"
                        type="file"
                      />
                    </div>
                  </CRow>
                  <div class="text-left">
                    <CButton class="button Bitem">ثبت مربی</CButton>
                  </div>
                </div>
              </CAccordionBody>
            </CAccordionItem>
          </CAccordion>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: 'TrainerEdit',
  computed: {
    trainers() {
      return this.$store.getters.GetTrainers
    },
    days() {
      return this.$store.getters.GetDays
    },
  },
}
</script>
