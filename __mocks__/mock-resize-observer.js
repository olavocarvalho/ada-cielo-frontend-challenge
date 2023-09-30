class MockResizeObserver {
  observe() {
    // Do nothing
  }
  disconnect() {
    // Do nothing
  }
}

global.ResizeObserver = MockResizeObserver;

export default MockResizeObserver;
