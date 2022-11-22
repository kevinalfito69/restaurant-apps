import UrlParser from '../../routes/url-parser';

const Detail = {
  async render() {
    return `
        <h2>Detail page</h2>

        `;
  },
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    console.log(url);
  },
};
export default Detail;
