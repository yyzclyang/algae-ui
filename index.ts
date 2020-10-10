try {
  ((requireContext) => requireContext.keys().forEach(requireContext))(
    require.context(
      './components',
      true,
      /^\.\/[^_][\w-]+\/style\/index\.tsx?$/
    )
  );
} catch (e) {}

export * from './components';
