import { Skeleton } from "@mui/material";

export default function SkeletonItem() {
  return (
    <div className="catalog__item">
      <div className="catalog__img">
        <Skeleton variant="rounded" height={165} />
      </div>
      <div className="catalog__info">
        <p className="catalog__name">
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        </p>
        <div className="catalog__bottom">
          <div className="catalog__price">
            <Skeleton variant="rounded" width={40} height={20} />
          </div>
          <div className="catalog__portion">
            <Skeleton variant="rounded" width={28} height={15} />
          </div>
        </div>
      </div>
    </div>
  );
}
