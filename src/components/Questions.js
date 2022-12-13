// import { RadioType, TextBox, CheckboxType, RangeType } from "./Forms";
import {Textbox, RadioType, RangeType, CheckboxField } from '../config'

export const Question1 = ({ handleChange, datas }) => {
  return (
    <div>
      <div className="col-8 mb-3">
        <p className="fw-semibold mb-1 sm-text">
          How easy was it to use Speedwapp?
        </p>
        <div className="d-flex justify-content-between align-items-center col-10">
          <span className="col-2 sm-text">Very hard</span>
          <div className="col-8">
            <RangeType
              min={1}
              max={5}
              step={1}
              name="howEasy"
              value={datas.howEasy}
              handleChange={handleChange}
            />
          </div>
          <span className="col-2 sm-text">Very Easy</span>
        </div>
      </div>
      <Textbox
        querry={"2. What specific challenges does Speedwapp solve for you?"}
        name={"challengeSolved"}
        handleChange={handleChange}
        value={datas.challengeSolved}
      />
      <Textbox
        name={"needsNotMet"}
        querry={"3. What needs were not met by Speedwapp?"}
        handleChange={handleChange}
        value={datas.needsNotMet}
      />
    </div>
  );
};

export const Question2 = ({ handleChange, datas }) => {
  return (
    <div>
      <div className="col-8 mb-3">
        <p className="fw-semibold mb-1 sm-text">
          Would you consider purchase a Speedwapp paid plan with premium
          features?
        </p>
        <div className="row">
          <RadioType
            text={"Yes"}
            name="wouldPurchase"
            handleChange={handleChange}
          />
          <RadioType
            text={"No"}
            name="wouldPurchase"
            handleChange={handleChange}
          />
        </div>
      </div>
      <div className="col-8">
        <p className="fw-semibold mb-1 sm-text">
          If not, why wouldn't you consider purchase Speedwapp and use its
          premium features? (Select all that apply)
        </p>
        <div className="row">
          <CheckboxField
            text={"Price"}
            id="Price"
            value={"Price"}
            checked={datas.includes("Price")}
            handleChange={handleChange}
          />
          <CheckboxField
            text={"Complexity editor"}
            id="Complexity editor"
            value={"Complexity editor"}
            checked={datas.includes("Complexity editor")}
            handleChange={handleChange}
          />
          <CheckboxField
            text={"Lack of specific features"}
            id="Lack of specific features"
            value={"Lack of specific features"}
            checked={datas.includes("Lack of specific features")}
            handleChange={handleChange}
          />
          <CheckboxField
            text={"The app is too slow"}
            id="The app is too slow"
            value={"The app is too slow"}
            checked={datas.includes("The app is too slow")}
            handleChange={handleChange}
          />
          <CheckboxField
            text={"Other"}
            id="Other"
            value={"Other"}
            checked={datas.includes("Other")}
            handleChange={handleChange}
          />
        </div>
      </div>
      <Textbox
        querry='If you chose "Lack of specific feature" please specify otherwise
          answer N/A'
        name={"specificFeature"}
        handleChange={handleChange}
        value={datas.specificFeature}
      />
    </div>
  );
};

export const Question3 = ({ handleChange, datas }) => {
  return (
    <div>
      <div className="col-12 mb-3">
        <p className="fw-semibold mb-3 sm-text">
          What's your evaluation of the following Speedwapp's features
        </p>
        <div className="mb-3">
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Drag-And-Drop
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              name="dragNDrop"
              value={datas.dragNDrop}
              onChange={handleChange}
            >
              <option value="Not Using">Not Using</option>
              <option value="Poor">Poor</option>
              <option value="Adequate">Adequate</option>
              <option value="Good" selected>
                Good
              </option>
              <option value="Excellent">Excellent</option>
            </select>
          </div>
        </div>

        <div className="mb-3">
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Mobile & Tablet Editing
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              name="mobileTablet"
              value={datas.mobileTablet}
              onChange={handleChange}
            >
              <option value="Not Using">Not Using</option>
              <option value="Poor">Poor</option>
              <option value="Adequate">Adequate</option>
              <option value="Good" selected>
                Good
              </option>
              <option value="Excellent">Excellent</option>
            </select>
          </div>
        </div>

        <div className="mb-3">
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Website Templates
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              name="webTemplate"
              value={datas.webTemplate}
              onChange={handleChange}
            >
              <option value="Not Using">Not Using</option>
              <option value="Poor">Poor</option>
              <option value="Adequate">Adequate</option>
              <option value="Good">
                Good
              </option>
              <option value="Excellent">Excellent</option>
            </select>
          </div>
        </div>

        <div className="mb-3">
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Background & Image components
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              name="bgAndImgCmp"
              value={datas.bgAndImgCmp}
              onChange={handleChange}
            >
              <option value="Not Using">Not Using</option>
              <option value="Poor">Poor</option>
              <option value="Adequate">Adequate</option>
              <option value="Good">
                Good
              </option>
              <option value="Excellent">Excellent</option>
            </select>
          </div>
        </div>

        <div className="mb-3">
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Shortcuts
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              name="shortcuts"
              value={datas.shortcuts}
              onChange={handleChange}
            >
              <option value="Not Using">Not Using</option>
              <option value="Poor">Poor</option>
              <option value="Adequate">Adequate</option>
              <option value="Good">
                Good
              </option>
              <option value="Excellent">Excellent</option>
            </select>
          </div>
        </div>

        <div className="mb-3">
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Snippets
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              name="snippets"
              value={datas.snippets}
              onChange={handleChange}
            >
              <option value="Not Using">Not Using</option>
              <option value="Poor">Poor</option>
              <option value="Adequate">Adequate</option>
              <option value="Good">
                Good
              </option>
              <option value="Excellent">Excellent</option>
            </select>
          </div>
        </div>

        <div className="mb-3">
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Dynamic widgets (overflow, carousel, etc)
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              name="widgets"
              value={datas.widgets}
              onChange={handleChange}
            >
              <option value="Not Using">Not Using</option>
              <option value="Poor">Poor</option>
              <option value="Adequate">Adequate</option>
              <option value="Good">
                Good
              </option>
              <option value="Excellent">Excellent</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Question4 = ({ handleChange, datas }) => {
  return (
    <div>
      <div className="col-8 mb-3">
        <p className="fw-semibold mb-1 sm-text">
          How clear is the information on using Speedwapp?
        </p>
        <div className="d-flex justify-content-between align-items-center col-10">
          <span className="col-2 sm-text">Not that clear</span>
          <div className="col-8">
            <RangeType
              min={0}
              max={5}
              step={1}
              name="isClear"
              value={datas.isClear}
              handleChange={handleChange}
            />
          </div>
          <span className="col-2 sm-text">Very clear</span>
        </div>
      </div>
      <div className="col-8 mb-3">
        <p className="fw-semibold mb-1 sm-text">
          How likely is it that you would recommend Speedwapp to a friend or
          colleague?
        </p>
        <div className="d-flex justify-content-between align-items-center col-10">
          <span className="col-2 sm-text">Less likely</span>
          <div className="col-8">
            <RangeType
              min={0}
              max={5}
              step={1}
              name="wouldRecommand"
              value={datas.wouldRecommand}
              handleChange={handleChange}
            />
          </div>
          <span className="col-2 sm-text">Very likely</span>
        </div>
      </div>
      <div className="col-8 mb-3">
        <p className="fw-semibold mb-1 sm-text">
          How useful do you think our tool is?
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <span className="col-2 sm-text">Not fair</span>
          <div className="col-8">
            <RangeType
              min={0}
              max={5}
              step={1}
              name="isUseful"
              value={datas.isUseful}
              handleChange={handleChange}
            />
          </div>
          <span className="col-2 sm-text">Very fair</span>
        </div>
      </div>
    </div>
  );
};

export const Question5 = ({handleChange, datas}) => {
  return (
    <div>
      <Textbox
        querry={
          "What changes would this company have to make for you to give Filestack a higher rating?"
        }
        name="shouldChange"
        handleChange={handleChange}
        value={datas.shouldChange}
      />
      <Textbox
        querry={"Additional Comments/Suggestions"}
        name="additional"
        handleChange={handleChange}
        value={datas.additional}
      />
    </div>
  );
};
