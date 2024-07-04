import React from 'react';
import '../styles/AdvanceSearch.css';

const AdvanceSearch = () => {
return (
    <section id="aa-advance-search">
      <div className="container">
        <div className="aa-advance-search-area">
          <div className="form">
            <div className="aa-advance-search-top">
              {/* Search form */}
              <div className="row">
                {/* Location input field */}
                <div className="col-md-4">
                  <div className="aa-single-advance-search">
                    <input type="text" placeholder="Type Your Location" />
                  </div>
                </div>
                {/* Category select field */}
                <div className="col-md-2">
                  <div className="aa-single-advance-search">
                    <select>
                      <option value="0" selected>Category</option>
                      <option value="1">Flat</option>
                      <option value="2">Land</option>
                      <option value="3">Plot</option>
                      <option value="4">Commercial</option>
                    </select>
                  </div>
                </div>
                {/* Type select field 1 */}
                <div className="col-md-2">
                  <div className="aa-single-advance-search">
                    <select>
                      <option value="0" selected>Type</option>
                      <option value="1">Flat</option>
                      <option value="2">Land</option>
                      <option value="3">Plot</option>
                      <option value="4">Commercial</option>
                    </select>
                  </div>
                </div>
                {/* Type select field 2 */}
                <div className="col-md-2">
                  <div className="aa-single-advance-search">
                    <select>
                      <option value="0" selected>Type</option>
                      <option value="1">Flat</option>
                      <option value="2">Land</option>
                      <option value="3">Plot</option>
                      <option value="4">Commercial</option>
                    </select>
                  </div>
                </div>
                {/* Search button */}
                <div className="col-md-2">
                  <div className="aa-single-advance-search">
                    <input className="aa-search-btn" type="submit" value="Search" />
                  </div>
                </div>
              </div>
            </div>
            {/* Range sliders section */}
            <div className="aa-advance-search-bottom">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvanceSearch;

