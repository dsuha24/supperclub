import React from "react";
import View from "./style";

const PreviewSection = ({ header, children }) => (
    <View>
        <div className='preview-section__header'>{header}</div>
        <div className='preview-section__children'>{children}</div>
    </View>
);

export default PreviewSection;
