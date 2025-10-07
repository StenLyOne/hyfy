import clsx from "clsx";

export function ButtonArrow({ className }: { className?: string }) {
  return (
    <button
      className={clsx(
        "relative w-[50px] min-w-[50px] h-[50px] min-h-[50px] rounded-full flex items-center justify-center overflow-hidden cursor-pointer group transition-colors",
        className
      )}
    >
      {/* первая стрелка (обычная) */}
      <svg
        className="
          absolute left-1/2 -translate-x-1/2 
          transition-all duration-300 
          group-hover:translate-x-full opacity-100 group-hover:opacity-0
        "
        width="25"
        height="16"
        viewBox="0 0 25 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M24.7071 7.23406C25.0976 7.62458 25.0976 8.25774 24.7071 8.64827L18.3431 15.0122C17.9526 15.4028 17.3195 15.4028 16.9289 15.0122C16.5384 14.6217 16.5384 13.9885 16.9289 13.598L22.5858 7.94116L16.9289 2.28431C16.5384 1.89378 16.5384 1.26062 16.9289 0.870094C17.3195 0.47957 17.9526 0.47957 18.3431 0.870094L24.7071 7.23406ZM24 7.94116V8.94116H0V7.94116V6.94116H24V7.94116Z" />
      </svg>

      {/* вторая стрелка (по hover) */}
      <svg
        className="
          absolute left-0 -translate-x-full 
          transition-all duration-300 
          group-hover:left-1/2 group-hover:-translate-x-1/2 
          group-hover:opacity-100 opacity-0
        "
        width="25"
        height="16"
        viewBox="0 0 25 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M24.7071 7.23406C25.0976 7.62458 25.0976 8.25774 24.7071 8.64827L18.3431 15.0122C17.9526 15.4028 17.3195 15.4028 16.9289 15.0122C16.5384 14.6217 16.5384 13.9885 16.9289 13.598L22.5858 7.94116L16.9289 2.28431C16.5384 1.89378 16.5384 1.26062 16.9289 0.870094C17.3195 0.47957 17.9526 0.47957 18.3431 0.870094L24.7071 7.23406ZM24 7.94116V8.94116H0V7.94116V6.94116H24V7.94116Z" />
      </svg>
    </button>
  );
}
