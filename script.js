<script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        marks: [], // API'dan kelgan ma'lumotlar
        currentPage: 1,
        totalPages: 1,
        nextPage: null,
        previousPage: null,
        minYear: null,
        maxYear: null,
      };
    },
    methods: {
      async fetchMarks() {
        // Formadagi minYear va maxYear qiymatlari bilan so'rov yuboriladi
        if (this.minYear && this.maxYear) {
          try {
            // Parametrlar: page har doim 1 bo'ladi, minYear va maxYear formadagi qiymatlar
            const params = {
              page: 1, // Sahifa 1 bo'lsin
              min_years: this.minYear,
              max_years: this.maxYear,
            };
  
            const response = await axios.get(
              `https://new.pochta.uz/api/v1/public/marks-page/`,
              { params }
            );
  
            // Ma'lumotlarni qayta ishlash
            this.marks = response.data.results.map((mark) => ({
              ...mark,
              save_image_uz: this.formatImageURL(mark.save_image_uz),
            }));
  
            this.currentPage = 1; // Sahifa 1 deb o'rnatish
            this.totalPages = response.data.total_pages;
  
            // next va previous URL'larni formatlash
            this.nextPage = response.data.next ? this.formatImageURL(response.data.next) : null;
            this.previousPage = response.data.previous ? this.formatImageURL(response.data.previous) : null;
          } catch (error) {
            console.error("Error fetching marks:", error);
          }
        } else {
          alert("Iltimos, min yil va max yilni kiriting.");
        }
      },
      formatImageURL(url) {
        // URL'ni https ga o'zgartirish
        if (!url) return null;
        return url.startsWith("http://") ? url.replace("http://", "https://") : url;
      },
      goToPage(page) {
        if (page >= 1 && page <= this.totalPages) {
          this.fetchMarks(page);
        }
      },
    },
    mounted() {
      this.fetchMarks(); // Ilk so'rovni yuborish
    },
  };
  </script>