<template class="container-fluid">
  <CRow dir="rtl">
    <CCol>
      <CCard class="mb-4">
        <CCardHeader class="h-item">
          <small>افزودن، ویرایش و حذف</small> <strong>دوره‌ها</strong>
        </CCardHeader>
        <CCardBody class="b-item">
          <CAccordion always-open>
            <CAccordionItem :item-key="1">
              <CAccordionHeader> نمایش دوره‌ها </CAccordionHeader>
              <CAccordionBody>
                <CTable>
                  <CTableHead color="secondary">
                    <tr class="cart_menu">
                      <td>نوع دوره</td>
                      <td>تعداد جلسات</td>
                      <td>قیمت</td>
                      <td>ظرفیت باقیمانده</td>
                      <td>حذف دوره</td>
                      <td>ویرایش دوره</td>
                    </tr>
                  </CTableHead>
                  <br />
                  <CTableBody>
                    <tr v-for="item in courses" :key="item.type">
                      <td class="cart_description">
                        <p>
                          {{ item.type }}
                        </p>
                      </td>
                      <td class="cart_price">
                        <p>{{ item.numberOfSessions }}</p>
                      </td>
                      <td class="cart_quantity">
                        <p>{{ item.price }}</p>
                      </td>
                      <td class="cart_quantity">
                        <p>{{ item.Capacity }} نفر</p>
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
              <CAccordionHeader> افزودن دوره جدید </CAccordionHeader>
              <CAccordionBody>
                <div class="a-form">
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
                        placeholder="تعداد جلسات"
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
                    <div class="col-sm-10">
                      <CFormInput
                        class="i-label"
                        type="text"
                        placeholder="ظرفیت باقیمانده"
                      />
                    </div>
                  </CRow>
                  <CRow class="mb-3">
                    <div class="text-left">
                      <CButton class="button Bitem">ثبت دوره</CButton>
                    </div>
                  </CRow>
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
  name: 'CoursesEdit',
  computed: {
    days() {
      return this.$store.getters.GetDays
    },
    courses() {
      return this.$store.getters.GetCourses
    },
  },
}
</script>

<style>
.b-item {
  background-color: #f6d6d5;
}
.h-item {
  background-color: #625c82;
  color: #fff;
}
.i-label {
  width: 200px;
  border: 2px #625c82 solid;
}
.a-form {
  display: flex;
  justify-content: space-around;
  align-items: right;
  flex-flow: row wrap;
  width: 100%;
  gap: 15px;
}
.Bitem {
  display: inline-block;
  background-color: #625c82;
  margin: 1px 15px 0 5px;
  padding: 8px 10px;
  border-radius: 10px;
  color: #ffffff;
}
</style>
