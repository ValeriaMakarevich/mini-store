export default function Logo ({className}:{className:string}){
return (
  <a className={`flex text-xl items-center ${className}`} aria-label="На главную страницу">
    MiniStore <span className="text-accent">.</span>
  </a>
)
}
