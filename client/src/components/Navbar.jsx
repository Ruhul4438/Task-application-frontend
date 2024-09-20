import React from "react";
import PropTypes from 'prop-types'

export default function (props) {
  return (
    <div className="bg-black max-w-2xl mx-auto">
      <div className="p-8  ">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-white">{props.title}</span>
          </div>
          <div className="flex items-center">
            <div>
              <span className="text-xs rounded-xl px-3 py-1 bg-[#effde6] flex items-center mr-6">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/6664/6664427.png"
                  alt="Icon"
                  className="w-4 h-4 mr-2"
                />
                30
              </span>
            </div>
            <div>
              <span className="text-xs rounded-xl px-3 py-1 bg-[#effde6] flex items-center mr-6 ">
                <img
                  src="https://seeklogo.com/images/I/indian-rupee-logo-BF2B070604-seeklogo.com.png"
                  alt="Icon"
                  className="w-3 h-3 mr-2"
                />
                1000
              </span>
            </div>
            <img
              src="data:image/png;base64,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"
              alt="Profile Icon"
              className="w-12 h-12 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
