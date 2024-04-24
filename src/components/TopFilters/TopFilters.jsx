import { arrBtnStatus } from "../../helpers/const";

const TopFilters = ({ setProducts, products, status, setStatus }) => {
  return (
    <div className="row mb-3 justify-content-start">
      <div className="col">
        <div
          id="topStatusBar"
          className="btn-group"
          role="group"
          aria-label="..."
        >
          {arrBtnStatus.map((btn) => (
            <button
              key={btn.active}
              onClick={() => setStatus(btn.active)}
              className={`btn btn-light ${
                status === btn.active ? "active" : ""
              }`}
            >
              {btn.name}
            </button>
          ))}
        </div>
      </div>
      <div className="col">
        <select
          className="custom-select"
          id="productSelect"
          value={products}
          onChange={(e) => setProducts(e.target.value)}
        >
          <option value="all">Все продукты</option>
          <option value="course-html">Курс по верстке</option>
          <option value="course-js">Курс по JavaScript</option>
          <option value="course-vue">Курс по VUE JS</option>
          <option value="course-php">Курс по PHP</option>
          <option value="course-wordpress">Курс по WordPress</option>
        </select>
      </div>
    </div>
  );
};

export default TopFilters;
