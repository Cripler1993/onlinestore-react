import { Skeleton } from "@mui/material";
import React from "react";

export default function SkeletonFullProduct() {
  return (
    <div className="full__product-row">
      <div className="full__product-left">
        <Skeleton variant="rounded" width={737} height={552} />
      </div>
      <div className="full__product-right">
        <div className="product__right-header">
          <Skeleton variant="rounded" width={264} height={15} />
        </div>
        <div className="product__right-title">
          <Skeleton variant="rounded" width={420} height={60} />
        </div>
        <div className="product__right-description">
          <Skeleton variant="rounded" width={420} height={15} />
        </div>
        <div className="product__right-nutritionFacts">
          <Skeleton variant="rounded" width={183} height={15} />
        </div>

        <div className="product__right-consist">
          <Skeleton variant="rounded" width={60} height={15} />
        </div>
        <div className="full__product-footer">
          <div className="product__footer-counter">
            <Skeleton variant="rounded" width={96} height={24} />
          </div>
          <div className="product__footer-btn">
            <Skeleton variant="rounded" width={330} height={42} />
          </div>
        </div>
      </div>
    </div>
  );
}
