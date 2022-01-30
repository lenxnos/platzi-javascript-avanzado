class AutoPause {

  constructor () {
    this.threshold = 0.25;
    this.handleInterception = this.handleInterception.bind(this);
  }

  run(player) {
    this.player = player;
    const observer = new IntersectionObserver(this.handleInterception, {
      threshold: this.threshold
    });

    observer.observe(this.player.media);
  }

  handleInterception(entries) {
    const [entry] = entries;
    const isVisible = entry.intersectionRatio >= this.threshold;
    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  };
}

export default AutoPause;