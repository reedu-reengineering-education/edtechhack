export function scrollToTargetAdjusted(target: HTMLElement | null) {
  if (target) {
    const header = document.getElementById('navbar')
    const headerOffset = header!.getBoundingClientRect().height
    const elementPosition = target.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }
}
