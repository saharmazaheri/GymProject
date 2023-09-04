<template class="container-fluid">
  <CRow dir="rtl">
    <CCol>
      <CCard class="mb-4">
        <CCardHeader class="h-item">
          <small>افزودن، ویرایش و حذف</small> <strong>محصولات</strong>
        </CCardHeader>
        <CCardBody class="b-item">
          <CAccordion always-open>
            <CAccordionItem :item-key="1">
              <CAccordionHeader> نمایش منو </CAccordionHeader>
              <CAccordionBody>
                <CTable>
                  <CTableHead color="secondary">
                    <tr class="cart_menu">
                      <td>تصویر</td>
                      <td>نام</td>
                      <td>توضیحات</td>
                      <td>قیمت</td>
                      <td>حذف محصول</td>
                      <td>ویرایش محصول</td>
                    </tr>
                  </CTableHead>
                  <br />
                  <CTableBody>
                    <tr v-for="item in coffee" :key="item.id">
                      <td class="cart_product">
                        <img :src="item.imge" width="60" height="60" alt="" />
                      </td>
                      <td class="cart_description">
                        <p>
                          {{ item.title }}
                        </p>
                      </td>
                      <td class="cart_price">
                        <p>{{ item.comments }}</p>
                      </td>
                      <td class="cart_quantity">
                        <p>{{ item.price }}</p>
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
              <CAccordionHeader> افزودن محصول جدید </CAccordionHeader>
              <CAccordionBody>
                <div>
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
                        placeholder="توضیحات"
                      />
                    </div>
                  </CRow>
                  <CRow class="mb-3">
                    <div class="col-sm-10">
                      <CFormInput
                        class="i-label"
                        type="text"
                        placeholder="قیمت"
                      />
                    </div>
                  </CRow>
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
                    <CButton class="button Bitem1">ثبت محصول</CButton>
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
  name: 'CoffeShopEdit',
  computed: {
    coffee() {
      return this.$store.getters.GetCoffee
    },
  },
}
</script>
